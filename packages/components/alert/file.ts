import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const fileContent = `import { useRenderElement } from "@jamsr-ui/hooks";
import type { UIProps } from "@jamsr-ui/utils";

export const Text = (props: Text.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", {
    props: elementProps,
  });
  return renderElement;
};

export namespace Text {
  export interface Props extends UIProps<"div"> {}
}
`;

const configContent = `import { createContext, use } from "react";
import { Item } from "./item";

const ItemContext = createContext<ItemConfig.Props>({});
export const ItemConfig = (props: ItemConfig.Props) => {
  const { children, ...restProps } = props;
  return <ItemContext value={restProps}>{children}</ItemContext>;
};

export const useItemConfig = () => {
  const context = use(ItemContext);
  return context;
};

export namespace ItemConfig {
  export interface Props extends Item.Props {}
}
`;

const indexContent = `"use client";

export { Text } from "./text";
export { TextConfig, useTextConfig } from "./text-config";`;

const kebabToCamel = (str: string) =>
  str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

const kebabToPascal = (str: string) =>
  str.replace(/(^\w|-\w)/g, (match) => match.replace("-", "").toUpperCase());

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

      const entryText = kebabToPascal(entry);
      {
        let indexFile = "";
        try {
          indexFile = readFileSync(indexPath, "utf-8");
        } catch {}
        if (indexFile.trim().split("\n").length < 5) {
          writeFileSync(
            indexPath,
            indexContent
              .replaceAll("Text", entryText)
              .replaceAll("text", entry),
            "utf-8"
          );
        }
      }

      if (!existsSync(filePath)) {
        writeFileSync(
          filePath,
          fileContent.replaceAll("Text", entryText),
          "utf-8"
        );
      }

      let configFile = "";
      try {
        configFile = readFileSync(configPath, "utf-8");
      } catch {}
      if (!configFile.includes("createContext")) {
        writeFileSync(
          configPath,
          configContent.replaceAll("Item", entryText).replaceAll("item", entry),
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
