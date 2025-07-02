import { DocsPage } from "@/components/docs-page";
import { Text } from "@jamsrui/react";
import { cn } from "@jamsrui/utils";
import { Metadata } from "next";
import { THEME } from "./theme";

const title = "Theme";
const description = "";
export const metadata: Metadata = {
  title,
  description,
};

const Page = () => {
  return (
    <DocsPage title={title} description={description}>
      {THEME.dark.map((item) => {
        const { heading, items } = item;
        return (
          <div key={heading} className="flex flex-col gap-2">
            <Text variant="h6">{heading}</Text>
            <div className="grid grid-cols-4 gap-4">
              {items.map((item) => {
                const { className, color, name } = item;
                return (
                  <div
                    key={name}
                    className={cn(
                      "rounded-md p-1 flex aspect-square border border-divider-dark",
                      className
                    )}
                  >
                    <div className="bg-surface w-full mt-auto rounded-md py-2 px-4">
                      <Text>{name}</Text>
                      <Text variant="caption">{color}</Text>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </DocsPage>
  );
};

export default Page;
