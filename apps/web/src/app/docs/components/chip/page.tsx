import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { ChipBordered } from "./examples/bordered";
import { ChipColors } from "./examples/colors";
import { ChipCustomized } from "./examples/customized";
import { ChipRadius } from "./examples/radius";
import { ChipSizes } from "./examples/sizes";
import { ChipStartEndContent } from "./examples/start-end-content";
import { ChipUsage } from "./examples/usage";
import { ChipVariants } from "./examples/variants";
import { ChipVariantsColors } from "./examples/variants-colors";
import { ChipWithClose } from "./examples/with-close";

const title = "Chip";
const description =
  "A Chip is a small block of essential information that represent an input, attribute, or action.";

export const metadata: Metadata = {
  title,
  description,
};

const Chip = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <ChipUsage />
      </CodeExample>
      <CodeExample title="Colors" url={resolvePath("colors.tsx")}>
        <ChipColors />
      </CodeExample>
      <CodeExample title="Variants" url={resolvePath("variants.tsx")}>
        <ChipVariants />
      </CodeExample>
      <CodeExample title="Sizes" url={resolvePath("sizes.tsx")}>
        <ChipSizes />
      </CodeExample>
      <CodeExample title="Radius" url={resolvePath("radius.tsx")}>
        <ChipRadius />
      </CodeExample>
      <CodeExample
        title="Start & End Content"
        url={resolvePath("start-end-content.tsx")}
      >
        <ChipStartEndContent />
      </CodeExample>
      <CodeExample title="Bordered" url={resolvePath("bordered.tsx")}>
        <ChipBordered />
      </CodeExample>
      <CodeExample
        title="Variants & Colors"
        url={resolvePath("variants-colors.tsx")}
      >
        <ChipVariantsColors />
      </CodeExample>
      <CodeExample title="With Close" url={resolvePath("with-close.tsx")}>
        <ChipWithClose />
      </CodeExample>
      <CodeExample title="Customized" url={resolvePath("customized.tsx")}>
        <ChipCustomized />
      </CodeExample>
    </DocsPage>
  );
};

export default Chip;
