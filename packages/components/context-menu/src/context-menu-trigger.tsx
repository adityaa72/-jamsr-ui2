"use client";
import { cloneElement, isValidElement } from "react";

import { useContextMenuContext } from "./context-menu-context";

export const ContextMenuTrigger = (props: ContextMenuTrigger.Props) => {
  const { children } = props;
  const { getTriggerProps } = useContextMenuContext();

  if (!isValidElement(children)) {
    console.warn("Invalid children passed to MenuTrigger");
    return null;
  }
  return cloneElement(children, getTriggerProps());
};
export namespace ContextMenuTrigger {
  export interface Props {
    children?: React.ReactElement;
  }
}
