"use client";

import { cloneElement } from "react";
import { useCollapsibleContext } from "./collapsible-context";

export const CollapsibleTrigger = (props: CollapsibleTrigger.Props) => {
  const { children } = props;
  const { getTriggerProps } = useCollapsibleContext();
  const renderElement = cloneElement(children, getTriggerProps());
  return renderElement;
};
export namespace CollapsibleTrigger {
  export interface Props {
    children: React.ReactElement;
  }
}
