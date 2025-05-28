import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { MenuUsage } from "./examples/usage";
import { MenuNested } from "./examples/nested";

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
    </DocsPage>
  );
};

export default Menu;
