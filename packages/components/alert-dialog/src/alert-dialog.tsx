import { Button } from "@jamsrui/button";
import {
  Dialog,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@jamsrui/dialog";
import { Text } from "@jamsrui/text";
import { mergeProps } from "@jamsrui/utils";

import { useAlertDialogConfig } from "./alert-dialog-config";
import { useAlertDialog } from "./use-alert-dialog";

export const AlertDialog = (props: AlertDialog.Props) => {
  const config = useAlertDialogConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useAlertDialog(mergedProps);
  const {
    getBodyProps,
    getCancelButtonProps,
    getConfirmButtonProps,
    getContentProps,
    getDialogProps,
    getFooterProps,
    getMessageProps,
    getTitleProps,
    cancelText,
    confirmText,
    message,
    title,
    children,
  } = ctx;

  return (
    <Dialog {...getDialogProps({})}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent {...getContentProps({})}>
        <DialogBody {...getBodyProps({})}>
          <Text {...getTitleProps({})}>{title}</Text>
          <Text {...getMessageProps({})}>{message}</Text>
        </DialogBody>
        <DialogFooter {...getFooterProps({})}>
          <DialogCloseTrigger>
            <Button {...getCancelButtonProps({})}>{cancelText}</Button>
          </DialogCloseTrigger>
          <DialogCloseTrigger>
            <Button {...getConfirmButtonProps({})}>{confirmText}</Button>
          </DialogCloseTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export namespace AlertDialog {
  export interface Props extends useAlertDialog.Props {}
}
