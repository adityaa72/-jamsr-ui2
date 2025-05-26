import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/text";
import { Metadata } from "next";

const title = "IconButton";
const description =
  "A compact and interactive button that uses an icon to trigger actions, providing a visually efficient way to execute tasks without cluttering the interface.";

export const metadata: Metadata = {
  title,
  description,
};

const IconButton = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default IconButton;
