import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { TooltipUsage } from "./examples/usage";

const title = "Tooltip";
const description =
  "A Tooltip component provides a small pop-up box that appears when a user hovers over an element. It is typically used to provide additional information or context about a UI element without cluttering the interface.";

export const metadata: Metadata = {
  title,
  description,
};

const Tooltip = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <TooltipUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Tooltip;
