import { useCallback, useMemo } from "react";

import type { Button } from "@jamsrui/button";
import type { Popover, PopoverContent } from "@jamsrui/popover";
import type { Text } from "@jamsrui/text";
import type { PropGetter } from "@jamsrui/utils";

export const useAlertPopover = (props: useAlertPopover.Props) => {
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

  const getRootProps: PropGetter<Partial<Popover.Props>> = useCallback(
    (props) => ({
      showArrow: true,
      ...props,
      ...dialogProps,
    }),
    [dialogProps]
  );

  const getContentProps: PropGetter<Partial<PopoverContent.Props>> =
    useCallback(
      (props) => ({
        ...props,
        ...slotProps?.content,
      }),
      [slotProps?.content]
    );

  const getConfirmButtonProps: PropGetter<Button.Props> = useCallback(
    (props) => ({
      size: "xs",
      onClick: onConfirm,
      color: "danger",
      ...props,
      ...confirmButtonProps,
    }),
    [onConfirm, confirmButtonProps]
  );

  const getCancelButtonProps: PropGetter<Button.Props> = useCallback(
    (props) => ({
      size: "xs",
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
      getRootProps,
      getContentProps,
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
      getCancelButtonProps,
      getConfirmButtonProps,
      getContentProps,
      getRootProps,
      getMessageProps,
      getTitleProps,
      message,
      title,
    ]
  );
};

export namespace useAlertPopover {
  export interface Props extends Popover.Props {
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
      content?: PopoverContent.Props;
    };
  }
}
