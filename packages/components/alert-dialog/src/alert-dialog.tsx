"use client";

import { mergeConfigProps } from "@jamsrui/utils";

import { useAlertDialogConfig } from "./alert-dialog-config";
import { AlertDialogContext } from "./alert-dialog-context";
import { alertDialogVariant } from "./styles";
import { useAlertDialog } from "./use-alert-dialog";

export const AlertDialog = (props: AlertDialog.Props) => {
  const config = useAlertDialogConfig();
  const mergedProps = mergeConfigProps(
    alertDialogVariant.defaultVariants,
    config,
    props
  );
  const ctx = useAlertDialog(mergedProps);
  return <AlertDialogContext value={ctx}>{props.children}</AlertDialogContext>;
};

export namespace AlertDialog {
  export interface Props extends useAlertDialog.Props {
    children: React.ReactNode;
  }
}
