import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/text";
import { Metadata } from "next";

const title = "Kbd";
const description =
  "A component that displays keyboard keys or key combinations, typically used to indicate shortcuts or key actions within an interface.";

export const metadata: Metadata = {
  title,
  description,
};

const Kbd = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Kbd;
