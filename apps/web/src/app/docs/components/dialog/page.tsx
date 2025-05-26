import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/text";
import { Metadata } from "next";

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
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Dialog;
