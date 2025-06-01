import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsrui/react";
import { Metadata } from "next";

const title = "Toast";
const description =
  "A Toast component displays brief, non-intrusive notifications that appear on the screen to inform users about an event, such as a successful action or an error message, and typically disappears after a few seconds.";

export const metadata: Metadata = {
  title,
  description,
};

const Toast = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Toast;
