"use client";

import { TooltipContext } from "./tooltip-context";
import { useTooltip } from "./use-tooltip";

export const Tooltip = (props: Tooltip.Props) => {
  const { children } = props;
  const ctx = useTooltip(props);
  return <TooltipContext value={ctx}>{children}</TooltipContext>;
};

export namespace Tooltip {
  export interface Props extends useTooltip.Props {}
}

export { FloatingDelayGroup as TooltipGroup } from "@floating-ui/react";
