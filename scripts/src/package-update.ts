import { execSync } from "child_process";
import { existsSync, readFileSync, writeFileSync } from "fs";

type PackageInfo = {
  path: string;
  name: string;
  version: string;
  private: boolean;
};

const cleanPackageContent = readFileSync(
  "./clean-package.config.json",
  "utf-8"
);
const readmeContent = readFileSync("./README.md", "utf-8");
const tsupContent = readFileSync("./tsup.config.ts", "utf-8");

function createPackageClean(pkg: PackageInfo) {
  const { path } = pkg;

  const pkgPath = path + "/package.json";
  const pkgContent = readFileSync(pkgPath, "utf-8");
  const pkgJson = JSON.parse(pkgContent);

  const packageExports: Record<string, string> = pkgJson.exports ?? {};
  const distPackageExports = Object.fromEntries(
    Object.entries(packageExports).map(([key, value]) => {
      const isTsFile = value.endsWith(".ts");
      const distValue = value.replace("src", "dist");
      return [
        key,
        isTsFile
          ? {
              types: distValue.replace(".ts", ".d.ts"),
              import: distValue.replace(".ts", ".mjs"),
            }
          : distValue,
      ];
    })
  );
  const cleanPackageContentObj = JSON.parse(cleanPackageContent);
  if (packageExports) {
    cleanPackageContentObj.replace.exports = {
      ...cleanPackageContentObj.replace.exports,
      ...distPackageExports,
    };
  }

  const readmePath = path + "/README.md";
  const tsupPath = path + "/tsup.config.ts";
  const cleanPackagePath = path + "/clean-package.config.json";

  if (!existsSync(tsupPath)) {
    writeFileSync(tsupPath, tsupContent, "utf-8");
  }
  writeFileSync(readmePath, readmeContent, "utf-8");
  writeFileSync(
    cleanPackagePath,
    JSON.stringify(cleanPackageContentObj, null, 2),
    "utf-8"
  );
  // writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2), "utf-8");
}

function main() {
  const output = execSync("pnpm list --depth -1 --recursive --json").toString();
  const packages: PackageInfo[] = JSON.parse(output);

  for (const pkg of packages) {
    if (pkg.private) continue;
    createPackageClean(pkg);
  }
}
main();
