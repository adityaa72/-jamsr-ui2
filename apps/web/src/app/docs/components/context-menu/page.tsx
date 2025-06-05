import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { ContextMenuBackdrop } from "./examples/backdrop";
import { ContextMenuColors } from "./examples/colors";
import { ContextMenuNested } from "./examples/nested";
import { ContextMenuOffset } from "./examples/offset";
import { ContextMenuPlacement } from "./examples/placement";
import { ContextMenuPreventClose } from "./examples/prevent-close";
import { ContextMenuRadius } from "./examples/radius";
import { ContextMenuStartEndContent } from "./examples/start-end-content";
import { ContextMenuUsage } from "./examples/usage";
import { ContextMenuWithoutLockScroll } from "./examples/without-lock-scroll";

const title = "Context Menu";
const description = "";

const ContextMenu = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample isCentered title="Usage" url={resolvePath("usage.tsx")}>
        <ContextMenuUsage />
      </CodeExample>
      <CodeExample isCentered title="Nested" url={resolvePath("nested.tsx")}>
        <ContextMenuNested />
      </CodeExample>
      <CodeExample
        isCentered
        title="Placement"
        url={resolvePath("placement.tsx")}
      >
        <ContextMenuPlacement />
      </CodeExample>
      <CodeExample isCentered title="Radius" url={resolvePath("radius.tsx")}>
        <ContextMenuRadius />
      </CodeExample>
      <CodeExample isCentered title="Colors" url={resolvePath("colors.tsx")}>
        <ContextMenuColors />
      </CodeExample>
      <CodeExample
        title="Start & End Content"
        url={resolvePath("start-end-content.tsx")}
      >
        <ContextMenuStartEndContent />
      </CodeExample>
      <CodeExample
        isCentered
        title="Prevent Close"
        url={resolvePath("prevent-close.tsx")}
      >
        <ContextMenuPreventClose />
      </CodeExample>
      <CodeExample
        isCentered
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
      >
        <ContextMenuBackdrop />
      </CodeExample>
      <CodeExample
        title="Without Lock Scroll"
        url={resolvePath("without-lock-scroll.tsx")}
      >
        <ContextMenuWithoutLockScroll />
      </CodeExample>
      <CodeExample isCentered title="Offset" url={resolvePath("offset.tsx")}>
        <ContextMenuOffset />
      </CodeExample>
    </DocsPage>
  );
};

export default ContextMenu;
