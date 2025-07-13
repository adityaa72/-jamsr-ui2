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
  const pkgContent = readFileSync(pkgPath, "utf-8").replaceAll(
    "./src",
    "./dist"
  );
  const pkgJson = JSON.parse(pkgContent);

  // pkgJson.scripts = {
  //   ...pkgJson.scripts,
  //   typecheck: "tsc --noEmit",
  //   lint: "npx eslint src --ext .ts,.tsx --fix",
  //   build: "tsup",
  //   prepack: "clean-package",
  //   postpack: "clean-package restore",
  // };
  // pkgJson.devDependencies = {
  //   ...(pkgJson.devDependencies ?? {}),
  //   "clean-package": "^2.2.0",
  // };
  // pkgJson["version"] = "0.0.1";
  // pkgJson["clean-package"] = "./clean-package.config.json";

  const packageExports = pkgJson.exports;
  console.log(" packageExports:->", packageExports);
  const cleanPackageContentObj = JSON.parse(cleanPackageContent);
  if (packageExports) {
    cleanPackageContentObj.replace.exports = {
      ...cleanPackageContentObj.replace.exports,
      ...packageExports,
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
