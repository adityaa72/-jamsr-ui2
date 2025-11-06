import { useCallback, useMemo, useRef, useState } from "react";

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
  FloatingFocusManagerProps,
  FloatingOverlay,
  Placement,
} from "@floating-ui/react";
import type { PropGetter, SlotsToClassNames } from "@jamsrui/utils";
import type { AnimatePresenceProps } from "motion/react";
import type { ComponentProps } from "react";

import type { PopoverContent } from "./popover-content";
import type { PopoverRoot } from "./popover-root";
import type { PopoverSlots, PopoverVariants } from "./styles";

export const usePopover = (props: usePopover.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    popoverVariants.variantKeys
  );
  const {
    className,
    classNames,
    defaultOpen,
    isDisabled = false,
    isModal = true,
    isOpen: isOpenProp,
    lockScroll = true,
    offset: offsetProp = 4,
    onOpenChange,
    placement = "top",
    showArrow = false,
    triggerOn = "click",
  } = $props;

  const [isOpen, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });
  const arrowRef = useRef<SVGSVGElement>(null);
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
    // onOpenChange: setIsOpen,
    middleware: [
      offset(offsetProp + arrowHeight),
      flip({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "end",
        padding: 4,
      }),
      shift({ padding: 4 }),
      showArrow ? arrow({ element: arrowRef }) : null,
      size({ apply() {} }),
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
  const getRootProps: PropGetter<PopoverRoot.Props> = useCallback(
    (props) => ({
      ...props,
      className: styles.root({
        className: cn(props.className, classNames?.root, className),
      }),
      ref: refs.setFloating,
      style: floatingStyles,
      ...getFloatingProps(),
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("popover"),
    }),
    [
      className,
      classNames?.root,
      floatingStyles,
      getFloatingProps,
      refs.setFloating,
      styles,
    ]
  );

  const getContentProps: PropGetter<PopoverContent.Props> = useCallback(
    (props) => ({
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1, x: 0, y: 0 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { type: "spring", stiffness: 300, damping: 25 },
      ...props,
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: cn(classNames?.content, props.className),
      }),
    }),
    [classNames?.content, styles]
  );

  const getArrowProps = useCallback(
    () => ({
      context,
      ref: arrowRef,
      className: styles.arrow({
        className: cn(classNames?.arrow),
      }),
    }),
    [classNames?.arrow, context, styles]
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
      className: styles.backdrop({
        className: cn(classNames?.backdrop),
      }),
    }),
    [classNames?.backdrop, lockScroll, styles]
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
      getRootProps,
      getArrowProps,
      isOpen,
      getTriggerProps,
      getFloatingFocusManagerProps,
      showArrow,
      getContentProps,
      getOverlayProps,
      getAnimatePresenceProps,
    }),
    [
      getRootProps,
      getArrowProps,
      isOpen,
      getTriggerProps,
      getFloatingFocusManagerProps,
      showArrow,
      getContentProps,
      getOverlayProps,
      getAnimatePresenceProps,
    ]
  );
};

export namespace usePopover {
  export interface Props extends PopoverVariants {
    classNames?: SlotsToClassNames<PopoverSlots>;
    defaultOpen?: boolean;
    placement?: Placement;
    isModal?: boolean;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    isDisabled?: boolean;
    triggerOn?: "click" | "hover";
    showArrow?: boolean;
    className?: string;
    offset?: number;
    lockScroll?: boolean;
  }
}
