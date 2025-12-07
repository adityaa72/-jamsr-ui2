import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  format: ["esm"],
  dts: true,
  clean: true,
  minify: true,
  bundle: false,
  plugins: [
    {
      name: "fix-esm",
      renderChunk(_, chunk) {
        if (this.format === "esm") {
          const code = chunk.code.replace(
            /from(['"])(\.{1,2}\/[^"'./]+)\1/g,
            (_, quote, path) => `from${quote}${path}.mjs${quote}`
          );
          return { code };
        }
      },
    },
  ],
});
