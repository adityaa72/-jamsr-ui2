import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { DrawerAnchors } from "./examples/anchors";
import { DrawerBackdrop } from "./examples/backdrop";
import { DrawerBordered } from "./examples/bordered";
import { DrawerCustomCloseBtn } from "./examples/custom-close-button";
import { DrawerCustomized } from "./examples/customized";
import { DrawerNonDismissible } from "./examples/non-dismissible";
import { DrawerScrollBehavior } from "./examples/scroll-behavior";
import { DrawerSize } from "./examples/size";
import { DrawerUsage } from "./examples/usage";
import { DrawerWithoutCloseButton } from "./examples/without-close-button";

const title = "Drawer";
const description =
  "A dynamic sliding panel that seamlessly transitions from the edge of the screen, offering supplementary content or contextual actions while preserving the primary user experience.";

export const metadata: Metadata = {
  title,
  description,
};

const Drawer = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample isCentered title="Usage" url={resolvePath("usage.tsx")}>
        <DrawerUsage />
      </CodeExample>
      <CodeExample isCentered title="Anchors" url={resolvePath("anchors.tsx")}>
        <DrawerAnchors />
      </CodeExample>
      <CodeExample isCentered title="Size" url={resolvePath("size.tsx")}>
        <DrawerSize />
      </CodeExample>
      <CodeExample
        isCentered
        title="Bordered"
        url={resolvePath("bordered.tsx")}
      >
        <DrawerBordered />
      </CodeExample>
      <CodeExample
        isCentered
        title="Scroll Behavior"
        url={resolvePath("scroll-behavior.tsx")}
      >
        <DrawerScrollBehavior />
      </CodeExample>
      <CodeExample
        isCentered
        title="Custom Close Button"
        url={resolvePath("custom-close-button.tsx")}
      >
        <DrawerCustomCloseBtn />
      </CodeExample>
      <CodeExample
        isCentered
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
      >
        <DrawerBackdrop />
      </CodeExample>
      <CodeExample
        isCentered
        title="Without Close Button"
        url={resolvePath("without-close-button.tsx")}
      >
        <DrawerWithoutCloseButton />
      </CodeExample>
      <CodeExample
        isCentered
        title="Non Dismissible"
        url={resolvePath("non-dismissible.tsx")}
      >
        <DrawerNonDismissible />
      </CodeExample>
      <CodeExample
        isCentered
        title="Customized"
        url={resolvePath("customized.tsx")}
      >
        <DrawerCustomized />
      </CodeExample>
    </DocsPage>
  );
};

export default Drawer;
