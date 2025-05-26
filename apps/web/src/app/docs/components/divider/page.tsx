import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/text";
import { Metadata } from "next";

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
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Divider;
