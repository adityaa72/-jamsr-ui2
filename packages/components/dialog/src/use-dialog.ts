"use client";
import { useCallback, useMemo } from "react";

import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useControlledState } from "@jamsrui/hooks";
import { dataAttrDev, mapPropsVariants, mergeProps } from "@jamsrui/utils";

import { dialogVariants } from "./styles";

import type {
  FloatingFocusManagerProps,
  FloatingOverlay,
} from "@floating-ui/react";
import type { PropGetter } from "@jamsrui/utils";
import type { ComponentProps } from "react";

import type { DialogBody } from "./dialog-body";
import type { DialogCloseButton } from "./dialog-close-button";
import type { DialogContainer } from "./dialog-container";
import type { DialogContent } from "./dialog-content";
import type { DialogFooter } from "./dialog-footer";
import type { DialogHeader } from "./dialog-header";
import type { DialogVariants } from "./styles";

export const useDialog = (props: useDialog.Props) => {
  const [newProps, variantProps] = mapPropsVariants(
    props,
    dialogVariants.variantKeys
  );
  const {
    defaultOpen,
    disableAnimation = false,
    isDismissible = true,
    isKeyboardDismissible = true,
    isOpen: isOpenProp,
    onOpenChange,
    hideCloseButton,
  } = newProps;

  const [isOpen, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });

  const {
    context,
    refs: { setFloating, setReference },
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });
  const click = useClick(context, {});
  const dismiss = useDismiss(context, {
    escapeKey: isKeyboardDismissible,
    outsidePressEvent: "click",
    enabled: isDismissible,
  });
  const role = useRole(context);
  const interactions = useInteractions([click, dismiss, role]);
  const { getReferenceProps, getFloatingProps } = interactions;

  const styles = dialogVariants(variantProps);
  const getBackdropProps = useCallback(() => {}, []);

  const handleTriggerClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const getHeaderProps: PropGetter<DialogHeader.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("header"),
      className: styles.header({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getBodyProps: PropGetter<DialogBody.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("body"),
      className: styles.body({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getContainerProps: PropGetter<DialogContainer.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("container"),
      className: styles.container({
        className: props.className,
      }),
      ref: setFloating,
      ...getFloatingProps(),
    }),
    [getFloatingProps, setFloating, styles]
  );

  const getContentProps: PropGetter<DialogContent.Props> = useCallback(
    (props) => ({
      initial: { scale: 0.9, opacity: 0, filter: "blur(4px)" },
      animate: { scale: 1, opacity: 1, filter: "blur(0px)" },
      exit: { scale: 0.9, opacity: 0, filter: "blur(4px)" },
      transition: { type: "spring", stiffness: 300, damping: 25 },
      ...props,
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getFooterProps: PropGetter<DialogFooter.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("footer"),
      className: styles.footer({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getCloseButtonProps: PropGetter<DialogCloseButton.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("close-button"),
      className: styles.closeButton({
        className: props.className,
      }),
      radius: "full",
      size: "sm",
      onClick: handleTriggerClose,
    }),
    [handleTriggerClose, styles]
  );

  const getCloseTriggerProps: PropGetter<ComponentProps<"button">> =
    useCallback(
      (props) =>
        mergeProps<ComponentProps<"button">>(props, {
          onClick: handleTriggerClose,
        }),
      [handleTriggerClose]
    );

  const getTriggerProps = useCallback(
    () => ({
      ...getReferenceProps({
        ref: setReference,
      }),
    }),
    [getReferenceProps, setReference]
  );

  const getOverlayProps = useCallback(
    (): ComponentProps<typeof FloatingOverlay> => ({
      className: styles.backdrop(),
      lockScroll: true,
    }),
    [styles]
  );

  const getFocusManagerProps = useCallback(
    (): Omit<FloatingFocusManagerProps, "children"> => ({
      context,
      modal: true,
    }),
    [context]
  );

  return useMemo(
    () => ({
      getBackdropProps,
      getHeaderProps,
      getBodyProps,
      getContentProps,
      getFooterProps,
      getTriggerProps,
      getCloseTriggerProps,
      getOverlayProps,
      getFocusManagerProps,
      isOpen,
      hideCloseButton,
      getContainerProps,
      getCloseButtonProps,
    }),
    [
      getBackdropProps,
      getHeaderProps,
      getBodyProps,
      getContentProps,
      getFooterProps,
      getTriggerProps,
      getCloseTriggerProps,
      getOverlayProps,
      getFocusManagerProps,
      isOpen,
      hideCloseButton,
      getContainerProps,
      getCloseButtonProps,
    ]
  );
};

export namespace useDialog {
  export interface Props extends DialogVariants {
    defaultOpen?: boolean;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    isDismissible?: boolean;
    isKeyboardDismissible?: boolean;
    disableAnimation?: boolean;
    hideCloseButton?: boolean;
  }
}
