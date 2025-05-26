import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/text";
import { Metadata } from "next";

const title = "Slider";
const description =
  "A Slider is a UI component that allows users to adjust a value within a range by sliding a handle along a track. It's commonly used for selecting values like volume, brightness, or any other continuous range.";

export const metadata: Metadata = {
  title,
  description,
};

const Slider = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Slider;
