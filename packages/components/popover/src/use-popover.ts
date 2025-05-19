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
import { cn } from "@jamsr-ui/utils";

import { popoverVariants } from "./styles";

import type { FloatingFocusManagerProps, Placement } from "@floating-ui/react";
import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsr-ui/utils";

import type { PopoverSlots, PopoverVariants } from "./styles";

export const usePopover = (props: usePopover.Props) => {
  const {
    className,
    classNames,
    initialOpen,
    isDisabled = false,
    isModal = false,
    isOpen: isOpenProp,
    lockScroll = true,
    offset: offsetProp,
    onOpenChange,
    placement = "top",
    showArrow = false,
    triggerOn = "click",
    radius,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef<SVGSVGElement>(null);

  const { refs, floatingStyles, context } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(offsetProp),
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

  const styles = popoverVariants({
    radius,
  });

  const getRootProps: PropGetter<UIProps<"div">> = useCallback(
    () => ({
      className: styles.root({
        className: cn(classNames?.root, className),
      }),
      ref: refs.setFloating,
      style: floatingStyles,
      ...getFloatingProps(),
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

  const getArrowProps = useCallback(
    () => ({
      context,
      ref: arrowRef,
      className: styles.arrow({
        className: cn(classNames?.arrow, className),
      }),
    }),
    [className, classNames?.arrow, context, styles]
  );

  const getTriggerProps = useCallback(
    () => ({
      ...getReferenceProps({
        ref: refs.setReference,
      }),
    }),
    [getReferenceProps, refs.setReference]
  );

  const getFloatingFocusManagerProps = useCallback(
    (): Omit<FloatingFocusManagerProps, "children"> => ({
      context,
      modal: isModal,
      returnFocus: triggerOn === "click",
      initialFocus: -1,
    }),
    [context, isModal, triggerOn]
  );

  return useMemo(
    () => ({
      getRootProps,
      getArrowProps,
      isOpen,
      getTriggerProps,
      getFloatingFocusManagerProps,
      showArrow,
    }),
    [
      getArrowProps,
      getFloatingFocusManagerProps,
      getRootProps,
      getTriggerProps,
      isOpen,
      showArrow,
    ]
  );
};

export namespace usePopover {
  export interface Props extends PopoverVariants {
    classNames?: SlotsToClassNames<PopoverSlots>;
    initialOpen?: boolean;
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
