import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { CompositeUsage } from "./examples/usage";

const title = "Composite";
const description = "Composite";

export const metadata: Metadata = {
  title,
  description,
};

const Accordion = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <CompositeUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Accordion;
