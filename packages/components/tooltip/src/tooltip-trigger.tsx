"use client";

import { cloneElement } from "react";

import { useTooltipContext } from "./tooltip-context";

export const TooltipTrigger = (props: TooltipTrigger.Props) => {
  const { children } = props;
  const { getTriggerProps, isDisabled } = useTooltipContext();
  if (isDisabled) return children;
  const triggerChildren = cloneElement(children, getTriggerProps());
  return <>{triggerChildren}</>;
};

export namespace TooltipTrigger {
  export interface Props {
    children: React.ReactElement;
  }
}
