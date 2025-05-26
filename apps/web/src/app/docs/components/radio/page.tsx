import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/text";
import { Metadata } from "next";

const title = "Radio";
const description =
  "Radio buttons are used for selecting one option from a set. They allow a single choice from a group of options, with only one option being selected at a time.";

export const metadata: Metadata = {
  title,
  description,
};

const Radio = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Radio;
