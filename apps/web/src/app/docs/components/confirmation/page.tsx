import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/text";
import { Metadata } from "next";

const title = "Confirmation";
const description =
  "A clear and concise component designed to prompt users for confirmation before proceeding with critical actions, ensuring better decision-making and reducing errors.";

export const metadata: Metadata = {
  title,
  description,
};

const Confirmation = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Confirmation;
