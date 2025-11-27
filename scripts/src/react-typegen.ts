import path from "path";
import fs from "fs";
import parser from "@babel/parser";
import traverse from "@babel/traverse";

const ROOT = process.cwd();
const PKG_FILE = path.join(ROOT, "../", "packages", "react", "package.json");
const OUTPUT_INDEX_FILE = path.join(
  ROOT,
  "../",
  "packages",
  "react",
  "src",
  "index.ts"
);
const OUTPUT_CONFIG_FILE = path.join(
  ROOT,
  "../",
  "packages",
  "react",
  "src",
  "config.tsx"
);

const pkg = JSON.parse(fs.readFileSync(PKG_FILE, "utf-8"));
const deps = Object.keys(pkg.dependencies).filter((name) =>
  name.startsWith("@jamsrui/")
);

const getNamedExports = (filePath: string) => {
  console.log("getting exports for", filePath);
  const content = fs.readFileSync(filePath, "utf-8");
  const ast = parser.parse(content, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });

  const valueExports = new Set();
  const typeExports = new Set();

  traverse.default(ast, {
    ExportNamedDeclaration(path) {
      if (path.node.declaration) {
        const decl = path.node.declaration;

        // Variable declaration export
        if (decl.type === "VariableDeclaration") {
          for (const d of decl.declarations) {
            if (d.id.type === "Identifier") {
              valueExports.add(d.id.name);
            }
          }
        }

        // Function export: `export function foo() {}`
        if (decl.type === "FunctionDeclaration" && decl.id) {
          valueExports.add(decl.id.name);
        }

        // Class export: `export class Foo {}`
        if (decl.type === "ClassDeclaration" && decl.id) {
          valueExports.add(decl.id.name);
        }
      }

      if (path.node.specifiers) {
        for (const s of path.node.specifiers) {
          const name = "name" in s.exported && s.exported?.name;
          const kind =
            ("exportKind" in s && s.exportKind) ||
            path.node.exportKind ||
            "value";
          console.log("🚀 ~ name:->", { name, kind });

          if (name) {
            if (kind === "type") {
              typeExports.add(name);
            } else {
              valueExports.add(name);
            }
          }
        }
      }
    },
  });

  return {
    values: [...valueExports],
    types: [...typeExports],
  };
};

const lines: string[] = [];
const configComponents: { name: string; dep: string }[] = [];
const ignoreItems = [
  "@jamsrui/hooks",
  "@jamsrui/icons",
  "@jamsrui/theme",
  "@jamsrui/utils",
];

function toCamelCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2") // handle PascalCase boundaries
    .replace(/[_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^./, (c) => c.toLowerCase());
}

for (const dep of deps) {
  if (ignoreItems.includes(dep)) continue;
  const depPkgPath = path.join("node_modules", dep, "package.json");
  if (!fs.existsSync(depPkgPath)) {
    console.warn("⚠️ Dependency package.json not found:", depPkgPath);
    continue;
  }

  const depPkg = JSON.parse(fs.readFileSync(depPkgPath, "utf-8"));
  const entry = depPkg.main;
  if (!entry) {
    console.warn("⚠️ No 'main' field in", depPkgPath);
    continue;
  }

  const fullEntryPath = path.resolve("node_modules", dep, entry);
  if (!fs.existsSync(fullEntryPath)) {
    console.warn("⚠️ Entry file not found:", fullEntryPath);
    continue;
  }

  const { values, types } = getNamedExports(fullEntryPath);

  if (values.length > 0) {
    lines.push(`export { ${values.join(", ")} } from '${dep}';`);
  }
  if (types.length > 0) {
    lines.push(`export type { ${types.join(", ")} } from '${dep}';`);
  }

  // config components
  for (const name of values) {
    if (
      typeof name === "string" &&
      !name.startsWith("use") &&
      name.endsWith("Config")
    ) {
      configComponents.push({ name, dep });
    }
  }
}

// Write output
lines.push(`export { JamsrUIConfig } from "./config";`);
fs.writeFileSync(OUTPUT_INDEX_FILE, lines.join("\n") + "\n");
console.log(`✅ Export file generated at ${OUTPUT_INDEX_FILE}`);

// Sort config components (alphabetically)
configComponents.sort((a, b) => a.name.localeCompare(b.name));

// Generate config-wrapper.tsx
const wrapperImports = configComponents
  .map(({ name, dep }) => `import { ${name} } from '${dep}';`)
  .join("\n");

const propsType = configComponents
  .map(({ name }) => {
    const prop = toCamelCase(name.replace("Config", ""));
    return `  ${prop}?: ${name}.Props;`;
  })
  .join("\n");

const nestedJSX = configComponents.reduceRight((acc, { name }) => {
  const prop = toCamelCase(name.replace("Config", ""));
  return `  <${name} {...props.${prop}}>\n${acc}\n  </${name}>`;
}, `    {children}`);

const wrapperComponent = `
${wrapperImports}

type Props = {
  children: React.ReactNode;
${propsType}
};

export const JamsrUIConfig = (props: Props) => {
  const { children } = props;
  return (
${nestedJSX}
  );
};
`.trim();

fs.writeFileSync(OUTPUT_CONFIG_FILE, wrapperComponent + "\n");
console.log(`✅ Config wrapper generated at ${OUTPUT_CONFIG_FILE}`);
