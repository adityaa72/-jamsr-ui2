import { readFile } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

export const readMetaUrl = (url: string, suffix = "") => {
  const base = dirname(fileURLToPath(url));
  return (file: string) => `${base}${suffix}${file}`;
};

export const readSourceCode = async (path: string) => {
  const data = await readFile(path, "utf-8");
  return data;
};
