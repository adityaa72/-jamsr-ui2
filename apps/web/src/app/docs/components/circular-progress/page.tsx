import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsrui/react";
import { Metadata } from "next";

const title = "Circular Progress";
const description =
  "A visually engaging component that provides a clear indication of ongoing processes or tasks, allowing users to track progress in real time with a circular animation.";

export const metadata: Metadata = {
  title,
  description,
};

const CircularProgress = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default CircularProgress;
