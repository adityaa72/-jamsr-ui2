import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { MenuBackdrop } from "./examples/backdrop";
import { MenuColors } from "./examples/colors";
import { MenuControlled } from "./examples/controlled";
import { MenuCustomized } from "./examples/customized";
import { MenuNested } from "./examples/nested";
import { MenuOffset } from "./examples/offset";
import { MenuPlacement } from "./examples/placement";
import { MenuPreventClose } from "./examples/prevent-close";
import { MenuRadius } from "./examples/radius";
import { MenuStartEndContent } from "./examples/start-end-content";
import { MenuUsage } from "./examples/usage";
import { MenuWithArrow } from "./examples/with-arrow";
import { MenuWithoutLockScroll } from "./examples/without-lock-scroll";

const title = "Menu";
const description =
  "A navigational component that displays a list of options or actions, allowing users to select from various choices within an interface in a structured manner.";

export const metadata: Metadata = {
  title,
  description,
};

const Menu = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <MenuUsage />
      </CodeExample>
      <CodeExample title="Nested" url={resolvePath("nested.tsx")}>
        <MenuNested />
      </CodeExample>
      <CodeExample title="Placement" url={resolvePath("placement.tsx")}>
        <MenuPlacement />
      </CodeExample>
      <CodeExample title="Radius" url={resolvePath("radius.tsx")}>
        <MenuRadius />
      </CodeExample>
      <CodeExample title="Colors" url={resolvePath("colors.tsx")}>
        <MenuColors />
      </CodeExample>
      <CodeExample
        title="Start & End Content"
        url={resolvePath("start-end-content.tsx")}
      >
        <MenuStartEndContent />
      </CodeExample>
      <CodeExample title="With Arrow" url={resolvePath("with-arrow.tsx")}>
        <MenuWithArrow />
      </CodeExample>
      <CodeExample title="Prevent Close" url={resolvePath("prevent-close.tsx")}>
        <MenuPreventClose />
      </CodeExample>
      <CodeExample title="Backdrop" url={resolvePath("backdrop.tsx")}>
        <MenuBackdrop />
      </CodeExample>
      <CodeExample title="Controlled" url={resolvePath("controlled.tsx")}>
        <MenuControlled />
      </CodeExample>
      <CodeExample
        title="Without Lock Scroll"
        url={resolvePath("without-lock-scroll.tsx")}
      >
        <MenuWithoutLockScroll />
      </CodeExample>
      <CodeExample title="Offset" url={resolvePath("offset.tsx")}>
        <MenuOffset />
      </CodeExample>
      <CodeExample title="Customized" url={resolvePath("customized.tsx")}>
        <MenuCustomized />
      </CodeExample>
    </DocsPage>
  );
};

export default Menu;
