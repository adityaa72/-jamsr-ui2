import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { AccordionDisabled } from "./examples/disabled";
import { AccordionUsage } from "./examples/usage";

const title = "Accordion";
const description =
  "An accordion is a UI component that organizes content into collapsible sections.";

export const metadata: Metadata = {
  title,
  description,
};

const Accordion = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <AccordionUsage />
      </CodeExample>
      <CodeExample title="Disabled" url={resolvePath("disabled.tsx")}>
        <AccordionDisabled />
      </CodeExample>
    </DocsPage>
  );
};

export default Accordion;
