import { useCallback, useMemo } from "react";

import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useControlledState } from "@jamsr-ui/hooks";
import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsr-ui/utils";

import { drawerVariants } from "./styles";

import type { FloatingFocusManagerProps } from "@floating-ui/react";
import type { PropGetter, SlotsToClassNames } from "@jamsr-ui/utils";

import type { DrawerBackdrop } from "./drawer-backdrop";
import type { DrawerBody } from "./drawer-body";
import type { DrawerCloseButton } from "./drawer-close-button";
import type { DrawerContent } from "./drawer-content";
import type { DrawerFooter } from "./drawer-footer";
import type { DrawerHeader } from "./drawer-header";
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
    enabled: isDismissible,
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
    }),
    [classNames?.closeButton, slotProps?.closeButton, styles]
  );

  const getBackdropProps: PropGetter<DrawerBackdrop.Props> = useCallback(
    (props) => ({
      lockScroll: true,
      ...props,
      className: styles.backdrop({
        className: cn(classNames?.backdrop, props.className),
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
    }),
    [
      getBodyProps,
      getCloseButtonProps,
      getContentProps,
      getFooterProps,
      getHeaderProps,
      getBackdropProps,
      getFocusManagerProps,
      getTriggerProps,
      getTriggerCloseProps,
      isOpen,
    ]
  );
};

export namespace useDrawer {
  export interface Props extends DrawerVariants {
    classNames?: SlotsToClassNames<DrawerSlots>;
    slotProps?: {
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
  }
}
