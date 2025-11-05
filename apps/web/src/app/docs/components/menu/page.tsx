import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { MenuBackdrop } from "./examples/backdrop";
import { MenuCheckboxItemsExample } from "./examples/checkbox-items";
import { MenuColors } from "./examples/colors";
import { MenuControlled } from "./examples/controlled";
import { MenuCustomized } from "./examples/customized";
import { MenuGroupExample } from "./examples/group";
import { MenuNested } from "./examples/nested";
import { MenuOffset } from "./examples/offset";
import { MenuPlacement } from "./examples/placement";
import { MenuPreventClose } from "./examples/prevent-close";
import { MenuRadioItemsExample } from "./examples/radio-items";
import { MenuRadius } from "./examples/radius";
import { MenuStartEndContent } from "./examples/start-end-content";
import { MenuUsage } from "./examples/usage";
import { MenuWithoutArrow } from "./examples/without-arrow";
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
      <CodeExample isCentered title="Usage" url={resolvePath("usage.tsx")}>
        <MenuUsage />
      </CodeExample>
      <CodeExample isCentered title="Nested" url={resolvePath("nested.tsx")}>
        <MenuNested />
      </CodeExample>

      <CodeExample
        isCentered
        title="Radio Items"
        url={resolvePath("radio-items.tsx")}
      >
        <MenuRadioItemsExample />
      </CodeExample>
      <CodeExample
        isCentered
        title="Checkbox Items"
        url={resolvePath("checkbox-items.tsx")}
      >
        <MenuCheckboxItemsExample />
      </CodeExample>
      <CodeExample isCentered title="Group" url={resolvePath("group.tsx")}>
        <MenuGroupExample />
      </CodeExample>
      <CodeExample
        title="Start & End Content"
        url={resolvePath("start-end-content.tsx")}
        isCentered
      >
        <MenuStartEndContent />
      </CodeExample>
      <CodeExample
        isCentered
        title="Without Arrow"
        url={resolvePath("without-arrow.tsx")}
      >
        <MenuWithoutArrow />
      </CodeExample>
      <CodeExample
        isCentered
        title="Prevent Close"
        url={resolvePath("prevent-close.tsx")}
      >
        <MenuPreventClose />
      </CodeExample>
      <CodeExample
        isCentered
        title="Placement"
        url={resolvePath("placement.tsx")}
      >
        <MenuPlacement />
      </CodeExample>
      <CodeExample isCentered title="Offset" url={resolvePath("offset.tsx")}>
        <MenuOffset />
      </CodeExample>
      <CodeExample isCentered title="Radius" url={resolvePath("radius.tsx")}>
        <MenuRadius />
      </CodeExample>
      <CodeExample isCentered title="Colors" url={resolvePath("colors.tsx")}>
        <MenuColors />
      </CodeExample>
      <CodeExample
        isCentered
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
      >
        <MenuBackdrop />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <MenuControlled />
      </CodeExample>
      <CodeExample
        title="Without Lock Scroll"
        url={resolvePath("without-lock-scroll.tsx")}
      >
        <MenuWithoutLockScroll />
      </CodeExample>
      <CodeExample
        isCentered
        title="Customized"
        url={resolvePath("customized.tsx")}
      >
        <MenuCustomized />
      </CodeExample>
    </DocsPage>
  );
};

export default Menu;
