import { DocsPage } from "@/components/docs-page";
import { Metadata } from "next";
import { FileUploadUsage } from "./examples/usage";
import { CodeExample } from "@/components/code-example";
import { readMetaUrl } from "@/utils/code";

export const metadata = {
  title: "File Upload",
  description: "File Upload",
} satisfies Metadata;

const Page = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={metadata.title} description={metadata.description}>
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <FileUploadUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default Page;
