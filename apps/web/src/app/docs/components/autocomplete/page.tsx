import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { AutocompleteUsage } from "./examples/usage";

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
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <AutocompleteUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Autocomplete;
