import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { AlertPopoverUsage } from "./examples/usage";

const title = "Alert Popover";
const description =
  "A clear and concise component designed to prompt users for confirmation before proceeding with critical actions, ensuring better decision-making and reducing errors.";

export const metadata: Metadata = {
  title,
  description,
};

const Confirmation = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample isCentered title="Usage" url={resolvePath("usage.tsx")}>
        <AlertPopoverUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Confirmation;
