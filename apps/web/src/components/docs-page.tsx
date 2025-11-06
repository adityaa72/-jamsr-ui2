import { DocsOnThisPage } from "./docs-on-this-page";
import { DocsPageInner } from "./docs-page-inner";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  size?: "md" | "lg";
};

export const DocsPage = (props: Props) => {
  const { children, description, title, size } = props;
  return (
    <DocsPageInner
      title={title}
      description={description}
      onThisPage={<DocsOnThisPage>{children}</DocsOnThisPage>}
      size={size}
    >
      {children}
    </DocsPageInner>
  );
};
