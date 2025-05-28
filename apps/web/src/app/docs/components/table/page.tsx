import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { TableUsage } from "./examples/usage";

const title = "Table";
const description =
  "A Table component is used to organize and display data in rows and columns. It provides a structured way to present large datasets, with features like sorting, filtering, and pagination for better data management.";

export const metadata: Metadata = {
  title,
  description,
};

const Table = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <TableUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Table;
