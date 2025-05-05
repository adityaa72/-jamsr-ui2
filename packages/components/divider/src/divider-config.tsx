import { createContext, use } from "react";
import { Divider } from "./divider";

const DividerContext = createContext<DividerConfig.Props>({});
export const DividerConfig = (props: DividerConfig.Props) => {
  const { children, ...restProps } = props;
  return <DividerContext value={restProps}>{children}</DividerContext>;
};

export const useDividerConfig = () => {
  const context = use(DividerContext);
  return context;
};

export namespace DividerConfig {
  export interface Props extends Divider.Props {}
}
