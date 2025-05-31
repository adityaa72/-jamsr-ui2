import { readSourceCode } from "@/utils/code";
import { Text } from "@jamsr-ui/text";
import { CodeBlock, CodeBlockProps } from "./code-block";
import { Tab, Tabs } from "@jamsr-ui/tabs";

type CodeExampleProps = Omit<CodeBlockProps, "children"> & {
  url: string;
  children: React.ReactElement;
  title: string;
  description?: string;
};

export const DocsPageSection = (props: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => {
  const { title, description, children } = props;
  const id = title.toLowerCase().replace(" ", "-");
  return (
    <section id={id} className="flex flex-col gap-2">
      <div>
        <Text render={<h1 />} variant="h5">
          {title}
        </Text>
        <Text className="text-foreground-secondary">{description}</Text>
      </div>
      {children}
    </section>
  );
};

export const CodeExample = async (props: CodeExampleProps) => {
  const { children, url, lang, title, description } = props;
  const code = await readSourceCode(url);
  const id = title.toLowerCase().replace(" ", "-");
  return (
    <section id={id} className="flex flex-col gap-2">
      <div>
        <Text render={<h3 />} variant="h5">
          {title}
        </Text>
        <Text>{description}</Text>
      </div>
      <Tabs defaultValue="preview">
        <Tab heading="Preview" value="preview">
          {children}
        </Tab>
        <Tab heading="Code" value="code">
          <CodeBlock lang={lang}>{code}</CodeBlock>
        </Tab>
      </Tabs>
    </section>
  );
};
