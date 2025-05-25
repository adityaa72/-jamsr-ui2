import { Text } from "@jamsr-ui/text";
import { DocsOnThisPage } from "./docs-on-this-page";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export const DocsPage = (props: Props) => {
  const { children, description, title } = props;
  return (
    <>
      <article className="flex col-span-2 flex-col gap-8 py-24">
        <div>
          <Text render={<h1 />} variant="h2">
            {title}
          </Text>
          <Text className="text-foreground-secondary">{description}</Text>
        </div>
        <div className="flex flex-col gap-4">{children}</div>
      </article>
      <DocsOnThisPage>{children}</DocsOnThisPage>
    </>
  );
};
