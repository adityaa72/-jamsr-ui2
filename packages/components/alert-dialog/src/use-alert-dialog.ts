import { ComponentProps, useCallback, useMemo } from "react";

import { dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { alertDialogVariant, AlertDialogVariants } from "./styles";

import type { Text } from "@jamsrui/text";
import type { PropGetter } from "@jamsrui/utils";

import {
  FloatingFocusManagerProps,
  FloatingOverlay,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useControlledState } from "@jamsrui/hooks";
import type { AlertDialogBody } from "./alert-dialog-body";
import { AlertDialogContainer } from "./alert-dialog-container";
import type { AlertDialogContent } from "./alert-dialog-content";
import type { AlertDialogFooter } from "./alert-dialog-footer";
import type { AlertDialogTitle } from "./alert-dialog-title";

export const useAlertDialog = (props: useAlertDialog.Props) => {
  const [_props, variantProps] = mapPropsVariants(
    props,
    alertDialogVariant.variantKeys
  );
  const {
    defaultOpen,
    disableAnimation = false,
    isDismissible = true,
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
    outsidePressEvent: "click",
    enabled: isDismissible,
  });
  const role = useRole(context);
  const interactions = useInteractions([click, dismiss, role]);
  const { getReferenceProps, getFloatingProps } = interactions;

  const handleTriggerClose = useCallback(() => {
    setIsOpen(false);
  }, []);

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
    [styles]
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
    [styles]
  );

  const getTriggerCloseProps = useCallback(
    (props: Partial<ComponentProps<"button">>): ComponentProps<"button"> => ({
      ...props,
      onClick: handleTriggerClose,
    }),
    [handleTriggerClose]
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
      getTriggerCloseProps,
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
      getTriggerCloseProps,
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
    disableAnimation?: boolean;
  }
}
