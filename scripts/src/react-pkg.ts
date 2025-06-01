import path from "path";
import fs from "fs";
import parser from "@babel/parser";
import traverse from "@babel/traverse";

const ROOT = process.cwd();
const pkg_file = path.join(ROOT, "../", "packages", "react", "package.json");
const OUTPUT_FILE = path.join(
  ROOT,
  "../",
  "packages",
  "react",
  "src",
  "index.ts"
);

const pkg = JSON.parse(fs.readFileSync(pkg_file, "utf-8"));
const deps = Object.keys(pkg.dependencies).filter((name) =>
  name.startsWith("@jamsr-ui/")
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
      if (path.node.specifiers) {
        for (const s of path.node.specifiers) {
          const name = "name" in s.exported && s.exported?.name;
          const kind =
            ("exportKind" in s && s.exportKind) ||
            path.node.exportKind ||
            "value";
          console.log(" kind:->", kind);
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
const ignoreItems = [
  "@jamsr-ui/hooks",
  "@jamsr-ui/icons",
  "@jamsr-ui/theme",
  "@jamsr-ui/utils",
];

for (const dep of deps) {
  if (ignoreItems.includes(dep)) continue;
  const depPkgPath = path.join("node_modules", dep, "package.json");
  if (!fs.existsSync(depPkgPath)) continue;

  const depPkg = JSON.parse(fs.readFileSync(depPkgPath, "utf-8"));
  const entry = depPkg.main;
  const fullEntryPath = path.resolve("node_modules", dep, entry);
  const { values, types } = getNamedExports(fullEntryPath);

  if (values.length > 0) {
    lines.push(`export { ${values.join(", ")} } from '${dep}';`);
  }
  if (types.length > 0) {
    lines.push(`export type { ${types.join(", ")} } from '${dep}';`);
  }
}

// Write output
fs.writeFileSync(OUTPUT_FILE, lines.join("\n") + "\n");
console.log(`✅ Export file generated at ${OUTPUT_FILE}`);
