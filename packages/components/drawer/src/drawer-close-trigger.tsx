"use client";
import { cloneElement, isValidElement } from "react";

import { useDrawerContext } from "./drawer-context";

export const DrawerCloseTrigger = (props: DrawerCloseTrigger.Props) => {
  const { children } = props;
  const { getTriggerCloseProps } = useDrawerContext();

  if (isValidElement(children)) {
    return cloneElement(children, getTriggerCloseProps());
  }

  console.warn("Invalid children passed to DialogCloseTrigger");
  return null;
};

export namespace DrawerCloseTrigger {
  export interface Props {
    children: React.ReactElement;
  }
}
