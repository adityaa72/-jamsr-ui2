"use client";
import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mergeProps } from "@jamsrui/utils";

import { copyToClipboardVariants } from "./styles";
import { useCopyToClipboard } from "./use-copy-to-clipboard";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";
import type { ComponentProps } from "react";

import type { ClipboardButton } from "./clipboard-button";
import type { CopyToClipboardSlots } from "./styles";

export const useClipboard = (props: useClipboard.Props) => {
  const {
    classNames,
    slotProps,
    hideCopyButton,
    text,
    message,
    onCopySuccess,
    onCopyError,
    ctx,
    timeout,
    ...elementProps
  } = props;

  const { isCopied, onCopy } = useCopyToClipboard({
    text,
    onCopyError,
    onCopySuccess,
    ctx,
    message,
    timeout,
  });

  const styles = copyToClipboardVariants();

  const getRootProps = useCallback(
    () => ({
      ...elementProps,
      onClick: onCopy,
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("clipboard"),
      className: styles.root({
        className: cn(classNames?.root, props.classNames),
      }),
    }),
    [classNames?.root, elementProps, onCopy, props.classNames, styles]
  );

  const getButtonProps: PropGetter<ClipboardButton.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.button, props),
      "data-slot": "button",
      className: styles.button({
        className: cn(
          slotProps?.button?.className,
          classNames?.button,
          props.className
        ),
      }),
    }),
    [classNames?.button, slotProps?.button, styles]
  );

  const getIconProps: PropGetter<UIProps<"svg">> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.icon, props),
      "data-slot": dataAttrDev("icon"),
      className: styles.icon({
        className: cn(
          slotProps?.icon?.className,
          classNames?.icon,
          props.className
        ),
      }),
    }),
    [classNames?.icon, slotProps?.icon, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getButtonProps,
      getIconProps,
      hideCopyButton,
      isCopied,
    }),
    [getButtonProps, getIconProps, getRootProps, hideCopyButton, isCopied]
  );
};

export namespace useClipboard {
  export interface Props extends UIProps<"label">, useCopyToClipboard.Props {
    hideCopyButton?: boolean;
    classNames?: SlotsToClassNames<CopyToClipboardSlots>;
    slotProps?: {
      button?: UIProps<"button">;
      icon?: ComponentProps<"svg">;
    };
  }
}
