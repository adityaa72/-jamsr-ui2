import { createContext, use } from "react";
import { Link } from "./link";

const LinkContext = createContext<LinkConfig.Props>({});
export const LinkConfig = (props: LinkConfig.Props) => {
  const { children, ...restProps } = props;
  return <LinkContext value={restProps}>{children}</LinkContext>;
};

export const useLinkConfig = () => {
  const context = use(LinkContext);
  return context;
};

export namespace LinkConfig {
  export interface Props extends Link.Props {}
}
