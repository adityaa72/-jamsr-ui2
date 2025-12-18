"use client";
import { useCallback, useMemo, useState } from "react";

import {
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useControlledState } from "@jamsrui/hooks";
import { cn, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { popoverVariants } from "./styles";

import type {
  Alignment,
  FloatingArrowProps,
  FloatingFocusManagerProps,
  FloatingOverlay,
  Placement,
  Side,
} from "@floating-ui/react";
import type { PropGetter } from "@jamsrui/utils";
import type { AnimatePresenceProps } from "motion/react";
import type { ComponentProps } from "react";

import type { PopoverContent } from "./popover-content";
import { PopoverDialog } from "./popover-dialog";
import type { PopoverVariants } from "./styles";

export function getTransformOrigin(placement: Placement): string {
  const [side, align] = placement.split("-") as [Side, Alignment | undefined];

  switch (side) {
    case "top":
      return align === "start"
        ? "bottom left"
        : align === "end"
          ? "bottom right"
          : "bottom center";

    case "bottom":
      return align === "start"
        ? "top left"
        : align === "end"
          ? "top right"
          : "top center";

    case "left":
      return align === "start"
        ? "top right"
        : align === "end"
          ? "bottom right"
          : "center right";

    case "right":
      return align === "start"
        ? "top left"
        : align === "end"
          ? "bottom left"
          : "center left";
  }
}

export const usePopover = (props: usePopover.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    popoverVariants.variantKeys
  );
  const {
    defaultOpen,
    disabled: isDisabled = false,
    isModal = true,
    isOpen: isOpenProp,
    lockScroll = true,
    offset: offsetProp = 4,
    onOpenChange,
    placement = "top",
    triggerOn = "click",
  } = $props;

  const [isOpen, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });

  const [arrowEl, setArrowEl] = useState<SVGSVGElement | null>(null);
  const showArrow = !!arrowEl;
  const arrowHeight = showArrow ? 7 : 0;
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        setIsAnimating(true);
      }
      setIsOpen(open);
    },
    [setIsOpen]
  );

  const { refs, floatingStyles, context } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: handleOpenChange,
    middleware: [
      offset(offsetProp + arrowHeight),
      flip({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "end",
        padding: 4,
      }),
      shift({ padding: 4 }),
      showArrow ? arrow({ element: arrowEl }) : null,
      size({
        apply({ elements, placement }) {
          const transformOrigin = getTransformOrigin(placement);
          elements.floating.style.setProperty(
            "--transform-origin",
            transformOrigin
          );
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context, {
    enabled: triggerOn === "click",
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);
  const hover = useHover(context, {
    enabled: triggerOn === "hover",
    handleClose: safePolygon({ blockPointerEvents: true }),
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
    hover,
  ]);

  const styles = popoverVariants(variantProps);
  const getContentProps: PropGetter<PopoverContent.Props> = useCallback(
    (props) => ({
      ...props,
      className: styles.content({
        className: cn(props.className),
      }),
      ref: refs.setFloating,
      style: floatingStyles,
      ...getFloatingProps(),
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("popover"),
    }),
    [floatingStyles, getFloatingProps, refs.setFloating, styles]
  );

  const getDialogProps: PropGetter<PopoverDialog.Props> = useCallback(
    (props) => ({
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1, x: 0, y: 0 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { type: "spring", stiffness: 300, damping: 25 },
      ...props,
      "data-slot": dataAttrDev("content"),
      className: styles.dialog({
        className: cn(props.className),
      }),
    }),
    [styles]
  );

  const getArrowProps = useCallback(
    (props: Partial<FloatingArrowProps>): FloatingArrowProps => ({
      tipRadius: 4,
      ...props,
      context,
      ref: setArrowEl,
      className: styles.arrow({
        className: props.className,
      }),
    }),
    [context, styles]
  );

  const getTriggerProps = useCallback(
    () => ({
      ...getReferenceProps({
        ref: refs.setReference,
      }),
      className:
        variantProps.backdrop === "blur" && (isOpen || isAnimating)
          ? "z-popover"
          : "",
    }),
    [
      getReferenceProps,
      isAnimating,
      isOpen,
      refs.setReference,
      variantProps.backdrop,
    ]
  );

  const getFloatingFocusManagerProps = useCallback(
    (): Omit<FloatingFocusManagerProps, "children"> => ({
      context,
      modal: isModal,
      returnFocus: triggerOn === "click",
      initialFocus: 0,
    }),
    [context, isModal, triggerOn]
  );

  const getOverlayProps = useCallback(
    (): ComponentProps<typeof FloatingOverlay> => ({
      lockScroll,
      className: styles.backdrop(),
    }),
    [lockScroll, styles]
  );

  const getAnimatePresenceProps = useCallback(
    (): AnimatePresenceProps => ({
      onExitComplete() {
        setIsAnimating(false);
      },
    }),
    []
  );

  return useMemo(
    () => ({
      getRootProps: getContentProps,
      getArrowProps,
      isOpen,
      getTriggerProps,
      getFloatingFocusManagerProps,
      showArrow,
      getContentProps,
      getOverlayProps,
      getAnimatePresenceProps,
      getDialogProps,
      isDisabled,
    }),
    [
      getContentProps,
      getArrowProps,
      isOpen,
      getTriggerProps,
      getFloatingFocusManagerProps,
      showArrow,
      getContentProps,
      getOverlayProps,
      getAnimatePresenceProps,
      getDialogProps,
      isDisabled,
    ]
  );
};

export namespace usePopover {
  export interface Props extends PopoverVariants {
    defaultOpen?: boolean;
    placement?: Placement;
    isModal?: boolean;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    triggerOn?: "click" | "hover";
    offset?: number;
    lockScroll?: boolean;
  }
}
