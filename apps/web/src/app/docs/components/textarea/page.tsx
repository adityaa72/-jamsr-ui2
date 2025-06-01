import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/react";
import { Metadata } from "next";

const title = "Textarea";
const description =
  "A Textarea component allows users to input multi-line text. It is commonly used for capturing longer user input, such as comments, messages, or descriptions, and offers flexible height for better content management.";

export const metadata: Metadata = {
  title,
  description,
};

const Textarea = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Textarea;
