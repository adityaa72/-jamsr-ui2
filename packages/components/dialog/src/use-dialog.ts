import { useCallback, useMemo, useState } from "react";

import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsr-ui/utils";

import { dialogVariants } from "./styles";

import type {
  FloatingFocusManagerProps,
  FloatingOverlay,
} from "@floating-ui/react";
import type { PropGetter, SlotsToClassNames } from "@jamsr-ui/utils";
import type { ComponentProps } from "react";

import type { DialogBody } from "./dialog-body";
import type { DialogCloseButton } from "./dialog-close-button";
import type { DialogContent } from "./dialog-content";
import type { DialogFooter } from "./dialog-footer";
import type { DialogHeader } from "./dialog-header";
import type { DialogSlots, DialogVariants } from "./styles";

export const useDialog = (props: useDialog.Props) => {
  const [newProps, variantProps] = mapPropsVariants(
    props,
    dialogVariants.variantKeys
  );
  const {
    slotProps,
    classNames,
    closeButton,
    defaultOpen,
    isAnimationDisabled,
    isDismissible,
    isKeyboardDismissible,
    isOpen: isOpenProp,
    onOpenChange,
  } = newProps;

  const [isOpen, setIsOpen] = useState(false);
  const {
    context,
    refs: { setFloating, setReference },
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });
  const click = useClick(context, {
    enabled: isDismissible,
  });
  const dismiss = useDismiss(context, {
    escapeKey: isKeyboardDismissible,
    outsidePressEvent: "click",
  });
  const role = useRole(context);
  const interactions = useInteractions([click, dismiss, role]);
  const { getReferenceProps, getFloatingProps } = interactions;

  const styles = dialogVariants(variantProps);
  const getBackdropProps = useCallback(() => {}, []);

  const handleTrigger = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleTriggerClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const getHeaderProps: PropGetter<DialogHeader.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.header ?? {}, props),
      "data-slot": dataAttrDev("header"),
      className: styles.header({
        className: cn(
          slotProps?.header?.className,
          classNames?.header,
          props.className
        ),
      }),
    }),
    [classNames?.header, slotProps?.header, styles]
  );

  const getBodyProps: PropGetter<DialogBody.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("body"),
      className: styles.body({
        className: cn(
          slotProps?.body?.className,
          classNames?.body,
          props.className
        ),
      }),
    }),
    [classNames?.body, slotProps?.body?.className, styles]
  );

  const getContentProps: PropGetter<DialogContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.content ?? {}, props),
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: cn(
          slotProps?.content?.className,
          classNames?.content,
          props.className
        ),
      }),
      ref: setFloating,
      ...getFloatingProps(),
    }),
    [
      classNames?.content,
      getFloatingProps,
      setFloating,
      slotProps?.content,
      styles,
    ]
  );

  const getFooterProps: PropGetter<DialogFooter.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.footer ?? {}, props),
      "data-slot": dataAttrDev("footer"),
      className: styles.footer({
        className: cn(
          slotProps?.footer?.className,
          classNames?.footer,
          props.className
        ),
      }),
    }),
    [classNames?.footer, slotProps?.footer, styles]
  );

  const getCloseButtonProps: PropGetter<DialogCloseButton.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.closeButton ?? {}, props),
      "data-slot": dataAttrDev("close-button"),
      className: styles.closeButton({
        className: cn(
          slotProps?.closeButton?.className,
          classNames?.closeButton,
          props.className
        ),
      }),
    }),
    [classNames?.closeButton, slotProps?.closeButton, styles]
  );

  const getTriggerProps = useCallback(
    () => ({
      ...getReferenceProps({
        ref: setReference,
      }),
    }),
    [getReferenceProps, setReference]
  );

  const getTriggerCloseProps = useCallback(
    () => ({
      onClick: handleTriggerClose,
    }),
    [handleTriggerClose]
  );

  const getOverlayProps = useCallback(
    (): ComponentProps<typeof FloatingOverlay> => ({
      className: styles.backdrop({
        className: classNames?.backdrop,
      }),
      lockScroll: true,
    }),
    [classNames?.backdrop, styles]
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
      getCloseButtonProps,
      getTriggerProps,
      getTriggerCloseProps,
      getOverlayProps,
      getFocusManagerProps,
      isOpen,
    }),
    [
      getBackdropProps,
      getHeaderProps,
      getBodyProps,
      getContentProps,
      getFooterProps,
      getCloseButtonProps,
      getTriggerProps,
      getTriggerCloseProps,
      getOverlayProps,
      getFocusManagerProps,
      isOpen,
    ]
  );
};

export namespace useDialog {
  export interface Props extends DialogVariants {
    classNames?: SlotsToClassNames<DialogSlots>;
    slotProps?: {
      header?: DialogHeader.Props;
      body?: DialogBody.Props;
      content?: DialogContent.Props;
      footer?: DialogFooter.Props;
      closeButton?: DialogCloseButton.Props;
    };
    // --
    closeButton?: React.ReactNode;
    defaultOpen?: boolean;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    isDismissible?: boolean;
    isKeyboardDismissible?: boolean;
    isAnimationDisabled?: boolean;
  }
}
