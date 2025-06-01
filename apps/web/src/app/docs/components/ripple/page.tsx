import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsrui/react";
import { Metadata } from "next";

const title = "Ripple";
const description =
  "Ripple is a visual effect that creates a wave-like animation when a user interacts with a UI element, such as a button or a link. It is often used to provide feedback to users, indicating that the element has been activated.";

export const metadata: Metadata = {
  title,
  description,
};

const Ripple = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Ripple;
