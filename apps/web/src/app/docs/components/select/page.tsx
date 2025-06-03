import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { SelectUsage } from "./examples/usage";
import { SelectWithErrorMessage } from "./examples/with-error-message";
import { SelectWithHelperText } from "./examples/with-helper-text";

const title = "Select";
const description =
  "The Select component provides a dropdown menu that allows users to choose one or more options from a list. It is commonly used for form inputs, offering a compact way to present multiple choices.";

export const metadata: Metadata = {
  title,
  description,
};

const Select = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <SelectUsage />
      </CodeExample>
      <CodeExample
        title="With Helper Text"
        url={resolvePath("with-helper-text.tsx")}
      >
        <SelectWithHelperText />
      </CodeExample>
      <CodeExample
        title="With Error Message"
        url={resolvePath("with-error-message.tsx")}
      >
        <SelectWithErrorMessage />
      </CodeExample>
    </DocsPage>
  );
};

export default Select;
