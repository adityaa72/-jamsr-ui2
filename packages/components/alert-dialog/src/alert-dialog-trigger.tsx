"use client";

import { cloneElement, isValidElement } from "react";
import { useAlertDialogContext } from "./alert-dialog-context";

export const AlertDialogTrigger = (props: AlertDialogTrigger.Props) => {
  const { children } = props;
  const { getTriggerProps } = useAlertDialogContext();

  if (isValidElement(children)) {
    return cloneElement(children, getTriggerProps(children.props ?? {}));
  }

  console.warn("Invalid children passed to AlertDialogTrigger");
  return null;
};

export namespace AlertDialogTrigger {
  export interface Props {
    children: React.ReactElement;
  }
}
