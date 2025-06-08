import { useCallback, useMemo } from "react";

import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useControlledState } from "@jamsrui/hooks";
import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsrui/utils";

import { drawerVariants } from "./styles";

import type {
  FloatingFocusManagerProps,
  FloatingOverlayProps,
} from "@floating-ui/react";
import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { DrawerBody } from "./drawer-body";
import type { DrawerCloseButton } from "./drawer-close-button";
import type { DrawerContent } from "./drawer-content";
import type { DrawerFooter } from "./drawer-footer";
import type { DrawerHeader } from "./drawer-header";
import type { DrawerPopover } from "./drawer-popover";
import type { DrawerSlots, DrawerVariants } from "./styles";

export const useDrawer = (props: useDrawer.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    drawerVariants.variantKeys
  );
  const {
    classNames,
    slotProps,
    defaultOpen,
    isOpen: isOpenProp,
    onOpenChange,
    isDismissible,
    isKeyboardDismissible,
    hideCloseButton = false,
  } = $props;
  const styles = drawerVariants(variantProps);

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

  const click = useClick(context, {
    enabled: true,
  });
  const dismiss = useDismiss(context, {
    escapeKey: isKeyboardDismissible,
    outsidePressEvent: "click",
    outsidePress: isDismissible,
  });
  const role = useRole(context);
  const interactions = useInteractions([click, dismiss, role]);
  const { getFloatingProps, getReferenceProps } = interactions;

  const handleTriggerClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const getHeaderProps: PropGetter<DrawerHeader.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.header, props),
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

  const getFooterProps: PropGetter<DrawerFooter.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.footer, props),
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

  const getBodyProps: PropGetter<DrawerBody.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.body, props),
      "data-slot": dataAttrDev("body"),
      className: styles.body({
        className: cn(
          slotProps?.body?.className,
          classNames?.body,
          props.className
        ),
      }),
    }),
    [classNames?.body, slotProps?.body, styles]
  );

  const getPopoverProps: PropGetter<DrawerPopover.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.popover, props),
      "data-slot": dataAttrDev("popover"),
      className: styles.popover({
        className: cn(
          slotProps?.popover?.className,
          classNames?.popover,
          props.className
        ),
      }),
      ref: setFloating,
      ...getFloatingProps(),
    }),
    [
      classNames?.popover,
      getFloatingProps,
      setFloating,
      slotProps?.popover,
      styles,
    ]
  );

  const getContentProps: PropGetter<DrawerContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.content, props),
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: cn(
          slotProps?.content?.className,
          classNames?.content,
          props.className
        ),
      }),
      initial: {
        opacity: 0,
        x: "100%",
        transition: {
          type: "spring",
          stiffness: 180,
          damping: 30,
          mass: 0.9,
        },
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 20,
          mass: 0.8,
        },
      },
      exit: {
        opacity: 0,
        x: "100%",
        transition: {
          type: "spring",
          stiffness: 300, // More force
          damping: 30, // Less resistance
          mass: 0.6,
        },
      },
    }),
    [classNames?.content, slotProps?.content, styles]
  );

  const getCloseButtonProps: PropGetter<DrawerCloseButton.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.closeButton, props),
      "data-slot": dataAttrDev("closeButton"),
      className: styles.closeButton({
        className: cn(
          slotProps?.closeButton?.className,
          classNames?.closeButton,
          props.className
        ),
      }),
      radius: "full",
      size: "xs",
      onClick: handleTriggerClose,
    }),
    [
      classNames?.closeButton,
      handleTriggerClose,
      slotProps?.closeButton,
      styles,
    ]
  );

  const getBackdropProps = useCallback(
    (): FloatingOverlayProps & UIProps<"div"> => ({
      lockScroll: true,
      "data-slot": dataAttrDev("backdrop"),
      className: styles.backdrop({
        className: cn(classNames?.backdrop),
      }),
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

  return useMemo(
    () => ({
      getHeaderProps,
      getFooterProps,
      getBodyProps,
      getContentProps,
      getCloseButtonProps,
      getBackdropProps,
      getFocusManagerProps,
      getTriggerProps,
      getTriggerCloseProps,
      isOpen,
      getPopoverProps,
      hideCloseButton,
    }),
    [
      getHeaderProps,
      getFooterProps,
      getBodyProps,
      getContentProps,
      getCloseButtonProps,
      getBackdropProps,
      getFocusManagerProps,
      getTriggerProps,
      getTriggerCloseProps,
      isOpen,
      getPopoverProps,
      hideCloseButton,
    ]
  );
};

export namespace useDrawer {
  export interface Props extends DrawerVariants {
    classNames?: SlotsToClassNames<DrawerSlots>;
    slotProps?: {
      popover?: DrawerPopover.Props;
      header?: DrawerHeader.Props;
      footer?: DrawerFooter.Props;
      content?: DrawerContent.Props;
      body?: DrawerBody.Props;
      closeButton?: DrawerCloseButton.Props;
    };
    defaultOpen?: boolean;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    isDismissible?: boolean;
    isKeyboardDismissible?: boolean;
    hideCloseButton?: boolean;
  }
}
