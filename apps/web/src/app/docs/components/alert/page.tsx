import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { AlertRadius } from "./examples/radius";
import { AlertStatus } from "./examples/status";
import { AlertUsage } from "./examples/usage";
import { AlertVariants } from "./examples/variants";
import { AlertWithAction } from "./examples/with-action";
import { AlertWithTitle } from "./examples/with-title";
import { AlertWithoutIcon } from "./examples/without-icon";

const title = "Alert";
const description =
  "A modal dialog that interrupts the user with important content and expects a response.";

export const metadata: Metadata = {
  title,
  description,
};

const Alert = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <AlertUsage />
      </CodeExample>
      <CodeExample title="With Title" url={resolvePath("with-title.tsx")}>
        <AlertWithTitle />
      </CodeExample>
      <CodeExample title="Status" url={resolvePath("status.tsx")}>
        <AlertStatus />
      </CodeExample>
      <CodeExample title="Variants" url={resolvePath("variants.tsx")}>
        <AlertVariants />
      </CodeExample>
      <CodeExample title="Radius" url={resolvePath("variants.tsx")}>
        <AlertRadius />
      </CodeExample>
      <CodeExample title="With Action" url={resolvePath("with-action.tsx")}>
        <AlertWithAction />
      </CodeExample>
      <CodeExample title="Without Icon" url={resolvePath("without-icon.tsx")}>
        <AlertWithoutIcon />
      </CodeExample>
    </DocsPage>
  );
};

export default Alert;
