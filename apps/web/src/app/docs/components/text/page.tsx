import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";

const title = "Text";
const description =
  "Text refers to the style, arrangement, and appearance of text. It is essential in design to ensure readability, hierarchy, and consistency in the presentation of written content across a user interface.";

export const metadata: Metadata = {
  title,
  description,
};

const Text = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <p>Coming Soon!</p>
    </DocsPage>
  );
};

export default Text;
