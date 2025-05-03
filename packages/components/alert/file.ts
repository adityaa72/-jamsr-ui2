import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const fileContent = `import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

export const Text = (props: Text.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", props, {
    props: elementProps,
  });
  return renderElement;
};

export namespace Text {
  export interface Props extends UIProps<"div"> {}
}
`;

const configContent = `import { UIProps } from "@jamsr-ui/utils";

export const TextConfig = (props: TextConfig.Props) => {
  return <div>{props.children}</div>;
};
export namespace TextConfig {
  export type Props = UIProps<"div">;
}
`;

const indexContent = `"use client";

export { Text } from "./text";
export { TextConfig } from "./text-config";`;

async function main() {
  const entries = readdirSync("../");
  console.log(entries);

  for (const entry of entries) {
    const fullPath = path.join("../", entry);
    if (statSync(fullPath).isDirectory()) {
      const srcDir = path.join(fullPath, "src");

      const indexPath = path.join(srcDir, "index.ts");
      const filePath = path.join(srcDir, `${entry}.tsx`);
      const configPath = path.join(srcDir, `${entry}-config.tsx`);
      const stylesPath = path.join(srcDir, `styles.ts`);

      const entryText = (
        entry.charAt(0).toUpperCase() + entry.slice(1)
      ).replace("-", "");

      const indexFile = readFileSync(indexPath, "utf-8");
      if (indexFile.trim().length < 2) {
        writeFileSync(
          indexPath,
          indexContent.replaceAll("Text", entryText).replaceAll("text", entry),
          "utf-8"
        );
      }

      if (!existsSync(filePath)) {
        writeFileSync(
          filePath,
          fileContent.replaceAll("Text", entryText),
          "utf-8"
        );
      }

      if (!existsSync(configPath)) {
        writeFileSync(
          configPath,
          configContent.replaceAll("Text", entryText),
          "utf-8"
        );
      }

      if (!existsSync(stylesPath)) {
        writeFileSync(stylesPath, "", "utf-8");
      }
    }
  }
}

main();
