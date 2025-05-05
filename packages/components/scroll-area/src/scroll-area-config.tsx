import { createContext, use } from "react";
import { ScrollArea } from "./scroll-area";

const ScrollAreaContext = createContext<ScrollAreaConfig.Props>({});
export const ScrollAreaConfig = (props: ScrollAreaConfig.Props) => {
  const { children, ...restProps } = props;
  return <ScrollAreaContext value={restProps}>{children}</ScrollAreaContext>;
};

export const useScrollAreaConfig = () => {
  const context = use(ScrollAreaContext);
  return context;
};

export namespace ScrollAreaConfig {
  export interface Props extends ScrollArea.Props {}
}
