import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { SwitchColors } from "./examples/colors";
import { SwitchControlled } from "./examples/controlled";
import { SwitchDescription } from "./examples/description";
import { SwitchDisabled } from "./examples/disabled";
import { SwitchLabelPlacement } from "./examples/label-placement";
import { SwitchReadonly } from "./examples/readonly";
import { SwitchSizes } from "./examples/sizes";
import { SwitchUsage } from "./examples/usage";
import { SwitchPrimitiveUsage } from "./examples/usage2";
import { SwitchWithLabel } from "./examples/with-label";

const title = "Switch";
const description =
  "A Switch component allows users to toggle between two states, typically representing an on/off or active/inactive choice. It is commonly used for enabling or disabling features in a user interface.";

export const metadata: Metadata = {
  title,
  description,
};

const Switch = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample isCentered title="Usage" url={resolvePath("usage.tsx")}>
        <SwitchUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Primitive Usage"
        url={resolvePath("usage2.tsx")}
      >
        <SwitchPrimitiveUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Label"
        url={resolvePath("with-label.tsx")}
      >
        <SwitchWithLabel />
      </CodeExample>
      <CodeExample isCentered title="Colors" url={resolvePath("colors.tsx")}>
        <SwitchColors />
      </CodeExample>
      <CodeExample isCentered title="Sizes" url={resolvePath("sizes.tsx")}>
        <SwitchSizes />
      </CodeExample>
      <CodeExample
        isCentered
        title="Readonly"
        url={resolvePath("readonly.tsx")}
      >
        <SwitchReadonly />
      </CodeExample>
      <CodeExample
        isCentered
        title="Disabled"
        url={resolvePath("disabled.tsx")}
      >
        <SwitchDisabled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Description"
        url={resolvePath("description.tsx")}
      >
        <SwitchDescription />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <SwitchControlled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Label Placement"
        url={resolvePath("label-placement.tsx")}
      >
        <SwitchLabelPlacement />
      </CodeExample>
    </DocsPage>
  );
};

export default Switch;
