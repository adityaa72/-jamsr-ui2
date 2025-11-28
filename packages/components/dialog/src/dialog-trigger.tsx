"use client";

import { cloneElement, isValidElement } from "react";

import { useDialogContext } from "./dialog-context";

export const DialogTrigger = (props: DialogTrigger.Props) => {
  const { children } = props;
  const { getTriggerProps } = useDialogContext();

  if (isValidElement(children)) {
    return cloneElement(children, getTriggerProps());
  }

  console.warn("Invalid children passed to DialogTrigger");
  return null;
};
export namespace DialogTrigger {
  export interface Props {
    children: React.ReactElement<unknown>;
  }
}
