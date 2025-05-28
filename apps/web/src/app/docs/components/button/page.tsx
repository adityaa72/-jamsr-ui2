import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { ButtonColors } from "./examples/colors";
import { ButtonCustomized } from "./examples/customized";
import { ButtonDisabled } from "./examples/disabled";
import { ButtonLoading } from "./examples/loading";
import { ButtonRadius } from "./examples/radius";
import { ButtonSizes } from "./examples/sizes";
import { ButtonUsage } from "./examples/usage";
import { ButtonVariants } from "./examples/variants";
import { ButtonVariantsColors } from "./examples/variants-colors";
import { ButtonWithIcons } from "./examples/with-icons";

const title = "Button";
const description =
  "Buttons allow users to take actions, and make choices, with a single tap.";

export const metadata: Metadata = {
  title,
  description,
};

const Button = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <ButtonUsage />
      </CodeExample>
      <CodeExample title="Variants" url={resolvePath("variants.tsx")}>
        <ButtonVariants />
      </CodeExample>
      <CodeExample title="Sizes" url={resolvePath("sizes.tsx")}>
        <ButtonSizes />
      </CodeExample>
      <CodeExample title="Radius" url={resolvePath("radius.tsx")}>
        <ButtonRadius />
      </CodeExample>
      <CodeExample title="Loading" url={resolvePath("loading.tsx")}>
        <ButtonLoading />
      </CodeExample>
      <CodeExample title="Disabled" url={resolvePath("disabled.tsx")}>
        <ButtonDisabled />
      </CodeExample>
      <CodeExample title="Colors" url={resolvePath("colors.tsx")}>
        <ButtonColors />
      </CodeExample>
      <CodeExample title="With Icons" url={resolvePath("with-icons.tsx")}>
        <ButtonWithIcons />
      </CodeExample>
      <CodeExample
        title="Variants Colors"
        url={resolvePath("variants-colors.tsx")}
      >
        <ButtonVariantsColors />
      </CodeExample>
      <CodeExample title="Customized" url={resolvePath("customized.tsx")}>
        <ButtonCustomized />
      </CodeExample>
    </DocsPage>
  );
};

export default Button;
