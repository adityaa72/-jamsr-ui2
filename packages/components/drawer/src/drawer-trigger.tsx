"use client";
import { cloneElement, isValidElement } from "react";

import { useDrawerContext } from "./drawer-context";

export const DrawerTrigger = (props: DrawerTrigger.Props) => {
  const { children } = props;
  const { getTriggerProps } = useDrawerContext();

  if (isValidElement(children)) {
    return cloneElement(children, getTriggerProps());
  }

  console.warn("Invalid children passed to DialogTrigger");
  return null;
};

export namespace DrawerTrigger {
  export interface Props {
    children: React.ReactElement;
  }
}
