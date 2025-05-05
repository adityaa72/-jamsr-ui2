import { createContext, use } from "react";
import { Tooltip } from "./tooltip";

const TooltipContext = createContext<TooltipConfig.Props>({});
export const TooltipConfig = (props: TooltipConfig.Props) => {
  const { children, ...restProps } = props;
  return <TooltipContext value={restProps}>{children}</TooltipContext>;
};

export const useTooltipConfig = () => {
  const context = use(TooltipContext);
  return context;
};

export namespace TooltipConfig {
  export interface Props extends Tooltip.Props {}
}
