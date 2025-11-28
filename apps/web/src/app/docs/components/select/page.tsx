import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { SelectControlled } from "./examples/controlled";
import { SelectCustomRenderComplex } from "./examples/custom-render-complex";
import { SelectCustomRenderMultiple } from "./examples/custom-render-multiple";
import { SelectCustomRenderValue } from "./examples/custom-render-value";
import { SelectDisabled } from "./examples/disabled";
import { SelectDisabledItems } from "./examples/disabled-items";
import { SelectMultiple } from "./examples/multiple";
import { SelectMultipleControlled } from "./examples/multiple-controlled";
import { SelectPlaceholder } from "./examples/placeholder";
import { SelectRadius } from "./examples/radius";
import { SelectSizes } from "./examples/sizes";
import { SelectStartEndItems } from "./examples/start-end-items";
import { SelectUsage } from "./examples/usage";
import { SelectWithErrorMessage } from "./examples/with-error-message";
import { SelectWithHelperText } from "./examples/with-helper-text";
import { SelectWithoutLabel } from "./examples/without-label";

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
      <CodeExample isCentered title="Usage" url={resolvePath("usage.tsx")}>
        <SelectUsage />
      </CodeExample>
      <CodeExample isCentered title="Radius" url={resolvePath("radius.tsx")}>
        <SelectRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <SelectControlled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Placeholder"
        url={resolvePath("placeholder.tsx")}
      >
        <SelectPlaceholder />
      </CodeExample>
      <CodeExample
        isCentered
        title="Disabled"
        url={resolvePath("disabled.tsx")}
      >
        <SelectDisabled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Disabled Items"
        url={resolvePath("disabled-items.tsx")}
      >
        <SelectDisabledItems />
      </CodeExample>
      <CodeExample
        isCentered
        title="Start & End Items"
        url={resolvePath("start-end-items.tsx")}
      >
        <SelectStartEndItems />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Helper Text"
        url={resolvePath("with-helper-text.tsx")}
      >
        <SelectWithHelperText />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Error Message"
        url={resolvePath("with-error-message.tsx")}
      >
        <SelectWithErrorMessage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Without Label"
        url={resolvePath("without-label.tsx")}
      >
        <SelectWithoutLabel />
      </CodeExample>
      <CodeExample isCentered title="Sizes" url={resolvePath("sizes.tsx")}>
        <SelectSizes />
      </CodeExample>
      <CodeExample
        isCentered
        title="Custom Render Value"
        url={resolvePath("custom-render-value.tsx")}
      >
        <SelectCustomRenderValue />
      </CodeExample>
      <CodeExample
        isCentered
        title="Multiple"
        url={resolvePath("multiple.tsx")}
      >
        <SelectMultiple />
      </CodeExample>
      <CodeExample
        isCentered
        title="Multiple Controlled"
        url={resolvePath("multiple-controlled.tsx")}
      >
        <SelectMultipleControlled />
      </CodeExample>
      {/* <CodeExample
        isCentered
        title="Custom Render Complex"
        url={resolvePath("custom-render-complex.tsx")}
      >
        <SelectCustomRenderComplex />
      </CodeExample> */}
      {/* <CodeExample
        isCentered
        title="Custom Render Multiple"
        url={resolvePath("custom-render-multiple.tsx")}
      >
        <SelectCustomRenderMultiple />
      </CodeExample> */}
    </DocsPage>
  );
};

export default Select;
