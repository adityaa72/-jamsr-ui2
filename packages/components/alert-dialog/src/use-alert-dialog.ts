import { useCallback, useMemo } from "react";

import type { Button } from "@jamsrui/button";
import type {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
} from "@jamsrui/dialog";
import type { Text } from "@jamsrui/text";
import type { PropGetter } from "@jamsrui/utils";

export const useAlertDialog = (props: useAlertDialog.Props) => {
  const {
    message,
    title,
    onConfirm,
    onCancel,
    children,
    cancelText = "Cancel",
    confirmText = "Confirm",
    slotProps,
    cancelButtonProps,
    confirmButtonProps,
    ...dialogProps
  } = props;

  const getDialogProps: PropGetter<Partial<Dialog.Props>> = useCallback(
    (props) => ({
      hideCloseButton: true,
      size: "md",
      ...props,
      ...dialogProps,
    }),
    [dialogProps]
  );

  const getContentProps: PropGetter<Partial<DialogContent.Props>> = useCallback(
    (props) => ({
      ...props,
      ...slotProps?.content,
    }),
    [slotProps?.content]
  );

  const getBodyProps: PropGetter<Partial<DialogBody.Props>> = useCallback(
    (props) => ({
      className: "flex gap-1 flex-col",
      ...props,
      ...slotProps?.body,
    }),
    [slotProps?.body]
  );

  const getFooterProps: PropGetter<Partial<DialogFooter.Props>> = useCallback(
    (props) => ({
      ...props,
      ...slotProps?.footer,
    }),
    [slotProps?.footer]
  );

  const getConfirmButtonProps: PropGetter<Button.Props> = useCallback(
    (props) => ({
      onClick: onConfirm,
      color: "danger",
      ...props,
      ...confirmButtonProps,
    }),
    [onConfirm, confirmButtonProps]
  );

  const getCancelButtonProps: PropGetter<Button.Props> = useCallback(
    (props) => ({
      onClick: onCancel,
      ...props,
      ...cancelButtonProps,
    }),
    [onCancel, cancelButtonProps]
  );

  const getTitleProps: PropGetter<Text.Props> = useCallback(
    (props) => ({
      variant: "h6",
      ...props,
      ...slotProps?.title,
    }),
    [slotProps?.title]
  );

  const getMessageProps: PropGetter<Text.Props> = useCallback(
    (props) => ({
      variant: "paragraph2",
      className: "text-foreground-secondary",
      ...props,
      ...slotProps?.message,
    }),
    [slotProps?.message]
  );

  return useMemo(
    () => ({
      getDialogProps,
      getContentProps,
      getBodyProps,
      getFooterProps,
      getConfirmButtonProps,
      getCancelButtonProps,
      getTitleProps,
      getMessageProps,
      cancelText,
      confirmText,
      message,
      title,
      children,
    }),
    [
      cancelText,
      children,
      confirmText,
      getBodyProps,
      getCancelButtonProps,
      getConfirmButtonProps,
      getContentProps,
      getDialogProps,
      getFooterProps,
      getMessageProps,
      getTitleProps,
      message,
      title,
    ]
  );
};

export namespace useAlertDialog {
  export interface Props extends Dialog.Props {
    title: React.ReactNode;
    message: React.ReactNode;
    onConfirm?: () => void;
    onCancel?: () => void;
    children: React.ReactElement;
    cancelText?: string;
    confirmText?: string;
    confirmButtonProps?: Button.Props;
    cancelButtonProps?: Button.Props;
    slotProps?: {
      title?: Text.Props;
      message?: Text.Props;
      content?: DialogContent.Props;
      body?: DialogBody.Props;
      footer?: DialogFooter.Props;
    };
  }
}
