import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/text";
import { Metadata } from "next";

const title = "Sidebar";
const description =
  "A Sidebar is a UI element that typically appears on the left or right side of the screen, providing easy access to navigation links or additional content without taking up too much space on the main interface.";

export const metadata: Metadata = {
  title,
  description,
};

const Sidebar = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Sidebar;
