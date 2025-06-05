import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { InputClearable } from "./examples/clearable";
import { InputControlled } from "./examples/controlled";
import { InputDisabled } from "./examples/disabled";
import { InputErrorState } from "./examples/error-state";
import { InputHelperText } from "./examples/helper-text";
import { InputPlaceholder } from "./examples/placeholder";
import { InputRadius } from "./examples/radius";
import { InputSizes } from "./examples/sizes";
import { InputWithStartEndContent } from "./examples/start-end-content";
import { InputUsage } from "./examples/usage";
import { InputWithIcon } from "./examples/with-icon";
import { InputWithoutLabel } from "./examples/without-label";
import { InputWithPlaceholder } from "./examples/with-placeholder";

const title = "Input";
const description =
  "A form element that allows users to input and submit data, supporting various types such as text, numbers, and more for seamless data entry.";

export const metadata: Metadata = {
  title,
  description,
};

const Input = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <InputUsage />
      </CodeExample>
      <CodeExample title="Controlled" url={resolvePath("controlled.tsx")}>
        <InputControlled />
      </CodeExample>
      <CodeExample title="Sizes" url={resolvePath("sizes.tsx")}>
        <InputSizes />
      </CodeExample>
      <CodeExample title="Radius" url={resolvePath("radius.tsx")}>
        <InputRadius />
      </CodeExample>
      <CodeExample title="Helper Text" url={resolvePath("helper-text.tsx")}>
        <InputHelperText />
      </CodeExample>
      <CodeExample title="Error State" url={resolvePath("error-state.tsx")}>
        <InputErrorState />
      </CodeExample>
      <CodeExample title="Disabled" url={resolvePath("error-state.tsx")}>
        <InputDisabled />
      </CodeExample>
      <CodeExample title="Clearable" url={resolvePath("clearable.tsx")}>
        <InputClearable />
      </CodeExample>
      <CodeExample title="Placeholde" url={resolvePath("placeholder.tsx")}>
        <InputPlaceholder />
      </CodeExample>
      <CodeExample
        title="With Placeholde"
        url={resolvePath("with-placeholder.tsx")}
      >
        <InputWithPlaceholder />
      </CodeExample>
      <CodeExample title="Without Label" url={resolvePath("without-label.tsx")}>
        <InputWithoutLabel />
      </CodeExample>
      <CodeExample
        title="Start & End Content"
        url={resolvePath("start-end-content.tsx")}
      >
        <InputWithStartEndContent />
      </CodeExample>
      <CodeExample title="With Icon" url={resolvePath("with-icon.tsx")}>
        <InputWithIcon />
      </CodeExample>
    </DocsPage>
  );
};

export default Input;
