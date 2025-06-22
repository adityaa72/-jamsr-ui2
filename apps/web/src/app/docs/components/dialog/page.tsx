import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { DialogBackdrop } from "./examples/backdrop";
import { DialogBordered } from "./examples/bordered";
import { DialogCustomCloseButton } from "./examples/custom-close-button";
import { DialogCustomized } from "./examples/customized";
import { DialogNonDismissible } from "./examples/non-dismissable";
import { DialogRadius } from "./examples/radius";
import { DialogScrollBehavior } from "./examples/scroll-behavior";
import { DialogSizes } from "./examples/sizes";
import { DialogUsage } from "./examples/usage";
import { DialogWithoutAnimation } from "./examples/without-animation";
import { DialogWithoutCloseButton } from "./examples/without-close-button";

const title = "Dialog";
const description =
  "A flexible and interactive component that presents content or actions in a modal window, allowing users to focus on critical information or decisions without distractions.";

export const metadata: Metadata = {
  title,
  description,
};

const Dialog = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample isCentered title="Usage" url={resolvePath("usage.tsx")}>
        <DialogUsage />
      </CodeExample>
      <CodeExample isCentered title="Radius" url={resolvePath("radius.tsx")}>
        <DialogRadius />
      </CodeExample>
      <CodeExample isCentered title="Sizes" url={resolvePath("sizes.tsx")}>
        <DialogSizes />
      </CodeExample>
      <CodeExample
        isCentered
        title="Without Animation"
        url={resolvePath("without-animation.tsx")}
      >
        <DialogWithoutAnimation />
      </CodeExample>
      <CodeExample
        isCentered
        title="Without Close Button"
        url={resolvePath("without-close-button.tsx")}
      >
        <DialogWithoutCloseButton />
      </CodeExample>
      <CodeExample
        isCentered
        title="Bordered"
        url={resolvePath("bordered.tsx")}
      >
        <DialogBordered />
      </CodeExample>
      <CodeExample
        isCentered
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
      >
        <DialogBackdrop />
      </CodeExample>
      <CodeExample
        isCentered
        title="Scroll Behavior"
        url={resolvePath("scroll-behavior.tsx")}
      >
        <DialogScrollBehavior />
      </CodeExample>
      <CodeExample
        isCentered
        title="Non Dismissible"
        url={resolvePath("non-dismissable.tsx")}
      >
        <DialogNonDismissible />
      </CodeExample>
      <CodeExample
        isCentered
        title="Custom Close Button"
        url={resolvePath("custom-close-button.tsx")}
      >
        <DialogCustomCloseButton />
      </CodeExample>
      <CodeExample
        isCentered
        title="Customized"
        url={resolvePath("customized.tsx")}
      >
        <DialogCustomized />
      </CodeExample>
    </DocsPage>
  );
};

export default Dialog;
