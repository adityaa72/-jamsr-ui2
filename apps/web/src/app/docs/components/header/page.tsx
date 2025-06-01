import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/react";
import { Metadata } from "next";

const title = "Header";
const description =
  "A prominent and customizable component that displays key information, navigation elements, or branding at the top of a page or section, providing a clear structure to the layout.";

export const metadata: Metadata = {
  title,
  description,
};

const Header = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Header;
