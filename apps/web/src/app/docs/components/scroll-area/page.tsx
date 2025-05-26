import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/text";
import { Metadata } from "next";

const title = "ScrollArea";
const description = "ScrollArea";

export const metadata: Metadata = {
  title,
  description,
};

const ScrollArea = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default ScrollArea;
