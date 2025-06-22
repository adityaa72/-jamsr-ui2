import { Button } from "@jamsrui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@jamsrui/popover";
import { Text } from "@jamsrui/text";
import { mergeProps } from "@jamsrui/utils";

import { useAlertPopoverConfig } from "./alert-popover-config";
import { useAlertPopover } from "./use-alert-popover";

export const AlertPopover = (props: AlertPopover.Props) => {
  const config = useAlertPopoverConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useAlertPopover(mergedProps);
  const {
    getCancelButtonProps,
    getConfirmButtonProps,
    getContentProps,
    getRootProps,
    getMessageProps,
    getTitleProps,
    cancelText,
    confirmText,
    message,
    title,
    children,
  } = ctx;

  return (
    <Popover {...getRootProps({})}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent {...getContentProps({})}>
        <div className="pb-4">
          <Text {...getTitleProps({})}>{title}</Text>
          <Text {...getMessageProps({})}>{message}</Text>
        </div>
        <div className="flex justify-end gap-2">
          <Button {...getCancelButtonProps({})}>{cancelText}</Button>
          <Button {...getConfirmButtonProps({})}>{confirmText}</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export namespace AlertPopover {
  export interface Props extends useAlertPopover.Props {}
}
