import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsrui/react";
import { Metadata } from "next";

const title = "DatePicker";
const description = "DatePicker";

export const metadata: Metadata = {
  title,
  description,
};

const DatePicker = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default DatePicker;
