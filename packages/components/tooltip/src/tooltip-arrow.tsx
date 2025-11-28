"use client";

import { FloatingArrow, FloatingArrowProps } from "@floating-ui/react";
import { useTooltipContext } from "./tooltip-context";

export const TooltipArrow = (props: TooltipArrow.Props) => {
  const { getArrowProps, isOpen } = useTooltipContext();
  if (!isOpen) return null;
  return <FloatingArrow {...getArrowProps(props)} {...props} />;
};

export namespace TooltipArrow {
  export interface Props extends Omit<FloatingArrowProps, "context"> {}
}
