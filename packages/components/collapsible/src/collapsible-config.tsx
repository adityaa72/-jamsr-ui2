import { createContext, use } from "react";
import { Collapsible } from "./collapsible";

const CollapsibleContext = createContext<CollapsibleConfig.Props>({});
export const CollapsibleConfig = (props: CollapsibleConfig.Props) => {
  const { children, ...restProps } = props;
  return <CollapsibleContext value={restProps}>{children}</CollapsibleContext>;
};

export const useCollapsibleConfig = () => {
  const context = use(CollapsibleContext);
  return context;
};

export namespace CollapsibleConfig {
  export interface Props extends Collapsible.Props {}
}
