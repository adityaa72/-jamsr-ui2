"use client";

import { cloneElement, isValidElement } from "react";
import { useAlertDialogContext } from "./alert-dialog-context";

export const AlertDialogTriggerClose = (
  props: AlertDialogTriggerClose.Props
) => {
  const { children } = props;
  const { getTriggerCloseProps } = useAlertDialogContext();

  if (isValidElement(children)) {
    return cloneElement(children, getTriggerCloseProps(children.props ?? {}));
  }

  console.warn("Invalid children passed to AlertDialogTriggerClose");
  return null;
};

export namespace AlertDialogTriggerClose {
  export interface Props {
    children: React.ReactElement;
  }
}
