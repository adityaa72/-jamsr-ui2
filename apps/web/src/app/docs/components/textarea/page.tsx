import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { TextareaControlled } from "./examples/controlled";
import { TextareaDisabled } from "./examples/disabled";
import { TextareaErrorState } from "./examples/error-state";
import { TextareaHelperText } from "./examples/helper-text";
import { TextareaPlaceholder } from "./examples/placeholder";
import { TextareaRadius } from "./examples/radius";
import { TextareaSizes } from "./examples/sizes";
import { TextareaUsage } from "./examples/usage";
import { TextareaVariants } from "./examples/variants";
import { TextareaWithIcon } from "./examples/with-icon";
import { TextareaWithPlaceholder } from "./examples/with-placeholder";
import { TextareaWithStartContent } from "./examples/with-start-content";
import { TextareaWithoutLabel } from "./examples/without-label";

const title = "Textarea";
const description =
  "A Textarea component allows users to input multi-line text. It is commonly used for capturing longer user input, such as comments, messages, or descriptions, and offers flexible height for better content management.";

export const metadata: Metadata = {
  title,
  description,
};

const Textarea = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <TextareaUsage />
      </CodeExample>
      <CodeExample title="Sizes" url={resolvePath("sizes.tsx")}>
        <TextareaSizes />
      </CodeExample>
      <CodeExample title="Variants" url={resolvePath("variants.tsx")}>
        <TextareaVariants />
      </CodeExample>
      <CodeExample title="With Icon" url={resolvePath("with-icon.tsx")}>
        <TextareaWithIcon />
      </CodeExample>
      <CodeExample
        title="With Placeholder"
        url={resolvePath("with-placeholder.tsx")}
      >
        <TextareaWithPlaceholder />
      </CodeExample>
      <CodeExample
        title="With Start Content"
        url={resolvePath("with-start-content.tsx")}
      >
        <TextareaWithStartContent />
      </CodeExample>
      <CodeExample title="Without Label" url={resolvePath("without-label.tsx")}>
        <TextareaWithoutLabel />
      </CodeExample>
      <CodeExample title="Controlled" url={resolvePath("controlled.tsx")}>
        <TextareaControlled />
      </CodeExample>
      <CodeExample title="Disabled" url={resolvePath("disabled.tsx")}>
        <TextareaDisabled />
      </CodeExample>
      <CodeExample title="Error State" url={resolvePath("error-state.tsx")}>
        <TextareaErrorState />
      </CodeExample>
      <CodeExample title="Helper Text" url={resolvePath("helper-text.tsx")}>
        <TextareaHelperText />
      </CodeExample>
      <CodeExample title="Placeholder" url={resolvePath("placeholder.tsx")}>
        <TextareaPlaceholder />
      </CodeExample>
      <CodeExample title="Radius" url={resolvePath("radius.tsx")}>
        <TextareaRadius />
      </CodeExample>
    </DocsPage>
  );
};

export default Textarea;
