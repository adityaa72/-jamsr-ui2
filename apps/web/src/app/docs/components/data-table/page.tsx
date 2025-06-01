import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/react";
import { Metadata } from "next";

const title = "DataTable";
const description =
  "A powerful and intuitive component for displaying and managing large datasets in a tabular format, with features such as sorting, filtering, and pagination.";

export const metadata: Metadata = {
  title,
  description,
};

const DataTable = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default DataTable;
