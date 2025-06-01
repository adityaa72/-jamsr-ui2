import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsrui/react";
import { Metadata } from "next";

const title = "Autocomplete";
const description =
  "The autocomplete is a normal text input enhanced by a panel of suggested options.";

export const metadata: Metadata = {
  title,
  description,
};

const Autocomplete = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default Autocomplete;
