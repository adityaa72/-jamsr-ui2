import { createContext, use } from "react";
import { Popover } from "./popover";

const PopoverContext = createContext<PopoverConfig.Props>({});
export const PopoverConfig = (props: PopoverConfig.Props) => {
  const { children, ...restProps } = props;
  return <PopoverContext value={restProps}>{children}</PopoverContext>;
};

export const usePopoverConfig = () => {
  const context = use(PopoverContext);
  return context;
};

export namespace PopoverConfig {
  export interface Props extends Popover.Props {}
}
