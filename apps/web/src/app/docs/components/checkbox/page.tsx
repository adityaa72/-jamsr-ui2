import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { CheckboxControlled } from "./examples/controlled";
import { CheckboxDescription } from "./examples/description";
import { CheckboxDisabled } from "./examples/disabled";
import { CheckboxInvalidState } from "./examples/invalid-state";
import { CheckboxReadonly } from "./examples/readonly";
import { CheckboxSizes } from "./examples/sizes";
import { CheckboxUsage } from "./examples/usage";

const title = "Checkbox";
const description =
  "Checkboxes enable users to select multiple items from a list or to indicate a single item as selected.";

export const metadata: Metadata = {
  title,
  description,
};

const Checkbox = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample isCentered title="Usage" url={resolvePath("usage.tsx")}>
        <CheckboxUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Description"
        url={resolvePath("description.tsx")}
      >
        <CheckboxDescription />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <CheckboxControlled />
      </CodeExample>
      <CodeExample isCentered title="Sizes" url={resolvePath("sizes.tsx")}>
        <CheckboxSizes />
      </CodeExample>
      <CodeExample
        isCentered
        title="Disabled"
        url={resolvePath("disabled.tsx")}
      >
        <CheckboxDisabled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Readonly"
        url={resolvePath("readonly.tsx")}
      >
        <CheckboxReadonly />
      </CodeExample>
      <CodeExample
        isCentered
        title="Invalid State"
        url={resolvePath("invalid-state.tsx")}
      >
        <CheckboxInvalidState />
      </CodeExample>
    </DocsPage>
  );
};

export default Checkbox;
