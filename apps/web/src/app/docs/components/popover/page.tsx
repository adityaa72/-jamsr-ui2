import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { PopoverBackdrop } from "./examples/backdrop";
import { PopoverControlled } from "./examples/controlled";
import { PopoverPlacements } from "./examples/placements";
import { PopoverRadius } from "./examples/radius";
import { PopoverTriggerOnHover } from "./examples/trigger-on-hover";
import { PopoverUsage } from "./examples/usage";
import { PopoverWithArrow } from "./examples/with-arrow";
import { PopoverWithoutLockScroll } from "./examples/without-lockscroll";

const title = "Popover";
const description =
  "Popover is a non-modal dialog that floats around its disclosure. It's commonly used for displaying additional rich content on top of something.";

export const metadata: Metadata = {
  title,
  description,
};

const Popover = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample isCentered title="Usage" url={resolvePath("usage.tsx")}>
        <PopoverUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Arrow"
        url={resolvePath("with-arrow.tsx")}
      >
        <PopoverWithArrow />
      </CodeExample>
      <CodeExample
        isCentered
        title="Placements"
        url={resolvePath("placements.tsx")}
      >
        <PopoverPlacements />
      </CodeExample>
      <CodeExample
        isCentered
        title="Trigger On Hover"
        url={resolvePath("trigger-on-hover.tsx")}
      >
        <PopoverTriggerOnHover />
      </CodeExample>
      <CodeExample isCentered title="Radius" url={resolvePath("radius.tsx")}>
        <PopoverRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <PopoverControlled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Without Scroll"
        url={resolvePath("without-lockscroll.tsx")}
      >
        <PopoverWithoutLockScroll />
      </CodeExample>
      <CodeExample
        isCentered
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
      >
        <PopoverBackdrop />
      </CodeExample>
    </DocsPage>
  );
};

export default Popover;
