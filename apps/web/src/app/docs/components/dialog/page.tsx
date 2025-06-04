import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { DialogUsage } from "./examples/usage";

const title = "Dialog";
const description =
  "A flexible and interactive component that presents content or actions in a modal window, allowing users to focus on critical information or decisions without distractions.";

export const metadata: Metadata = {
  title,
  description,
};

const Dialog = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample isCentered title="Usage" url={resolvePath("usage.tsx")}>
        <DialogUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Dialog;
