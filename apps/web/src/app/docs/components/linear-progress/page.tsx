import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "@jamsr-ui/text";
import { Metadata } from "next";

const title = "LinearProgress";
const description =
  "A visual indicator that displays the progress of an ongoing task in a linear format, providing users with a clear understanding of task completion in real time.";

export const metadata: Metadata = {
  title,
  description,
};

const LinearProgress = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default LinearProgress;
