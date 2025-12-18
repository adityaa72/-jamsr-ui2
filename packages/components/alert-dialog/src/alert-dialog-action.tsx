"use client";

import { Button } from "@jamsrui/button";
import { useAlertDialogContext } from "./alert-dialog-context";

export const AlertDialogAction = (props: AlertDialogAction.Props) => {
  const { getActionProps } = useAlertDialogContext();
  return <Button {...getActionProps(props)} />;
};

export namespace AlertDialogAction {
  export interface Props extends Button.Props {}
}
