import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { DividerUsage } from "./examples/usage";

const title = "Divider";
const description =
  "Divider is a component that separates content on a page, enhancing structure and visual hierarchy.";

export const metadata: Metadata = {
  title,
  description,
};

const Divider = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample isCentered title="Usage" url={resolvePath("usage.tsx")}>
        <DividerUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Divider;
