"use client";

import { FloatingArrow, FloatingArrowProps } from "@floating-ui/react";
import { usePopoverContext } from "./popover-context";

export const PopoverArrow = (props: PopoverArrow.Props) => {
  const { getArrowProps } = usePopoverContext();
  return <FloatingArrow {...getArrowProps(props)} />;
};

export namespace PopoverArrow {
  export interface Props extends Omit<FloatingArrowProps, "context"> {}
}
