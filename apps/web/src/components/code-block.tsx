import { BundledLanguage, codeToHtml } from "shiki";

export type CodeBlockProps = {
  children: string;
  lang?: BundledLanguage;
};

export const CodeBlock = async (props: CodeBlockProps) => {
  const { children, lang = "tsx" } = props;
  const html = await codeToHtml(children, {
    lang,
    theme: "github-dark-default",
  });
  return (
    <div
      className="p-4 rounded-2xl max-h-[50vh] overflow-auto"
      style={{
        background: "#0d1117",
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
};