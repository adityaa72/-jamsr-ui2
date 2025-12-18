"use client";

import { Button } from "@jamsrui/button";
import { useAlertDialogContext } from "./alert-dialog-context";

export const AlertDialogCancel = (props: AlertDialogCancel.Props) => {
  const { getCancelProps } = useAlertDialogContext();
  return <Button {...getCancelProps(props)} />;
};

export namespace AlertDialogCancel {
  export interface Props extends Button.Props {}
}
