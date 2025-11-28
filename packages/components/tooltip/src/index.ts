import { TooltipGroup, Tooltip as TooltipRoot } from "./tooltip";
import { TooltipArrow } from "./tooltip-arrow";
import { TooltipContent } from "./tooltip-content";
import { TooltipTrigger } from "./tooltip-trigger";
export { TooltipConfig, useTooltipConfig } from "./tooltip-config";

export { TooltipGroup } from "./tooltip";

export const Tooltip = Object.assign(TooltipRoot, {
  Root: TooltipRoot,
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Trigger: TooltipTrigger,
  Group: TooltipGroup,
});

export namespace Tooltip {
  export interface Props extends TooltipRoot.Props {}
  export interface Arrow extends TooltipArrow.Props {}
  export interface Content extends TooltipContent.Props {}
  export interface Trigger extends TooltipTrigger.Props {}
}
