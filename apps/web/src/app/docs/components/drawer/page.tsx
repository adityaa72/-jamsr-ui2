import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/text";
import { Metadata } from "next";

const title = "Drawer";
const description =
  "A dynamic sliding panel that seamlessly transitions from the edge of the screen, offering supplementary content or contextual actions while preserving the primary user experience.";

export const metadata: Metadata = {
  title,
  description,
};

const Drawer = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Drawer;
