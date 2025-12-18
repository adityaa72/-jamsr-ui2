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

import { alertDialogVariant } from "./styles";

import type {
  FloatingFocusManagerProps,
  FloatingOverlay,
} from "@floating-ui/react";
import type { Text } from "@jamsrui/text";
import type { PropGetter } from "@jamsrui/utils";
import type { ComponentProps } from "react";

import type { AlertDialogAction } from "./alert-dialog-action";
import type { AlertDialogBody } from "./alert-dialog-body";
import type { AlertDialogCancel } from "./alert-dialog-cancel";
import type { AlertDialogContainer } from "./alert-dialog-container";
import type { AlertDialogContent } from "./alert-dialog-content";
import type { AlertDialogFooter } from "./alert-dialog-footer";
import type { AlertDialogTitle } from "./alert-dialog-title";
import type { AlertDialogVariants } from "./styles";

export const useAlertDialog = (props: useAlertDialog.Props) => {
  const [_props, variantProps] = mapPropsVariants(
    props,
    alertDialogVariant.variantKeys
  );
  const {
    defaultOpen,
    isDismissible = false,
    isKeyboardDismissible = true,
    isOpen: isOpenProp,
    onOpenChange,
  } = _props;
  const styles = alertDialogVariant(variantProps);

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
    outsidePress: isDismissible,
    outsidePressEvent: "click",
    enabled: true,
  });
  const role = useRole(context);
  const interactions = useInteractions([click, dismiss, role]);
  const { getReferenceProps, getFloatingProps } = interactions;

  const handleTriggerClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const getContainerProps: PropGetter<AlertDialogContainer.Props> = useCallback(
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

  const getContentProps: PropGetter<AlertDialogContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getBodyProps: PropGetter<AlertDialogBody.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("body"),
      className: styles.body({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getFooterProps: PropGetter<AlertDialogFooter.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("footer"),
      className: styles.footer({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getTitleProps: PropGetter<AlertDialogTitle.Props> = useCallback(
    (props) => ({
      variant: "h6",
      "data-slot": dataAttrDev("title"),
      className: styles.title({
        className: props.className,
      }),
      ...props,
    }),
    [styles]
  );

  const getDescriptionProps: PropGetter<Text.Props> = useCallback(
    (props) => ({
      variant: "paragraph2",
      "data-slot": dataAttrDev("description"),
      className: styles.description({
        className: props.className,
      }),
      ...props,
    }),
    [styles]
  );

  const getTriggerProps = useCallback(
    (props: Partial<ComponentProps<"button">>): ComponentProps<"button"> => ({
      ...props,
      className: styles.trigger({
        className: props.className,
      }),
      ...getReferenceProps({
        ref: setReference,
      }),
    }),
    [getReferenceProps, setReference, styles]
  );

  const getCancelProps: PropGetter<AlertDialogCancel.Props> = useCallback(
    (props) => ({
      variant: "bordered",
      ...mergeProps(props, {
        onClick: handleTriggerClose,
      }),
      className: styles.cancel({
        className: props.className,
      }),
    }),
    [styles, handleTriggerClose]
  );

  const getActionProps: PropGetter<AlertDialogAction.Props> = useCallback(
    (props) => ({
      color: "danger",
      variant: "solid",
      ...props,
      className: styles.action({
        className: props.className,
      }),
    }),
    [styles]
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
      getContainerProps,
      getContentProps,
      getBodyProps,
      getFooterProps,
      getTitleProps,
      getDescriptionProps,
      getTriggerProps,
      getOverlayProps,
      getFocusManagerProps,
      getCancelProps,
      getActionProps,
      isOpen,
    }),
    [
      getContainerProps,
      getBodyProps,
      getContentProps,
      getFooterProps,
      getTitleProps,
      getDescriptionProps,
      getTriggerProps,
      getOverlayProps,
      getFocusManagerProps,
      getCancelProps,
      getActionProps,
      isOpen,
    ]
  );
};

export namespace useAlertDialog {
  export interface Props extends AlertDialogVariants {
    defaultOpen?: boolean;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    isDismissible?: boolean;
    isKeyboardDismissible?: boolean;
  }
}
