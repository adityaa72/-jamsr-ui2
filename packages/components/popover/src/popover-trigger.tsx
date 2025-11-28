"use client";

import { cloneElement } from "react";

import { usePopoverContext } from "./popover-context";

export const PopoverTrigger = (props: PopoverTrigger.Props) => {
  const { children } = props;
  const { getTriggerProps, isDisabled } = usePopoverContext();
  if (isDisabled) return children;
  return cloneElement(children, getTriggerProps());
};

export namespace PopoverTrigger {
  export interface Props {
    children: React.ReactElement<unknown>;
  }
}
