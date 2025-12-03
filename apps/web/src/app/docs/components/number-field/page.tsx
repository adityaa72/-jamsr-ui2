import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { NumberFieldWithFormatting } from "./examples/test-usage";
import { NumberFieldUsage } from "./examples/usage";
import { WithFormatOptions } from "./examples/test2-usage";

const title = "NumberField";
const description =
  "A Number Field component allows users to input numerical values. It typically includes controls for incrementing or decrementing values, providing a precise way to select a number within a defined range.";

export const metadata: Metadata = {
  title,
  description,
};

const NumberInput = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <NumberFieldUsage />
      </CodeExample>
      <CodeExample
        title="With Format Options"
        url={resolvePath("test2-usage.tsx")}
      >
        <WithFormatOptions />
      </CodeExample>
      <NumberFieldWithFormatting />
    </DocsPage>
  );
};

export default NumberInput;
