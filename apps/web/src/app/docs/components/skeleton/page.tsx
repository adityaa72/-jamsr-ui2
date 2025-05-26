import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/text";
import { Metadata } from "next";

const title = "Skeleton";
const description =
  "A Skeleton component is a placeholder UI element that mimics the layout of content while it's loading. It provides a visual cue to users that content is being loaded, improving the user experience during delays.";

export const metadata: Metadata = {
  title,
  description,
};

const Skeleton = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Skeleton;
