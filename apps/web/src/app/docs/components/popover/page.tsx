import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { PopoverUsage } from "./examples/usage";

const title = "Popover";
const description =
  "Popover is a non-modal dialog that floats around its disclosure. It's commonly used for displaying additional rich content on top of something.";

export const metadata: Metadata = {
  title,
  description,
};

const Popover = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <PopoverUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Popover;
