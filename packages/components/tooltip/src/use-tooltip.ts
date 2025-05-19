import { cloneElement, useCallback, useMemo, useRef, useState } from "react";

import {
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { cn } from "@jamsr-ui/utils";

import { tooltipVariants } from "./styles";

import type { FloatingArrowProps, Placement } from "@floating-ui/react";
import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsr-ui/utils";
import type { ReactElement } from "react";

import type { TooltipSlots, TooltipVariants } from "./styles";

export const useTooltip = (props: useTooltip.Props) => {
  const {
    title,
    isDisabled = false,
    closeDelay = 100,
    openDelay = 400,
    offset: offsetProp = 8,
    placement = "top",
    radius,
    showArrow = false,
    className,
    classNames,
    children,
  } = props;

  const [isOpen, setIsOpen] = useState(true);
  const arrowRef = useRef<SVGSVGElement>(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetProp),
      flip({
        fallbackAxisSideDirection: "start",
      }),
      shift(),
      showArrow ? arrow({ element: arrowRef }) : null,
    ],
  });

  const hover = useHover(context, {
    move: false,
    handleClose: safePolygon({ blockPointerEvents: true }),
    delay: {
      close: closeDelay,
      open: openDelay,
    },
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  const styles = tooltipVariants({
    radius,
  });

  const triggerChildren = cloneElement(
    children,
    getReferenceProps({
      ref: refs.setReference,
    })
  );

  const getRootProps: PropGetter<UIProps<"div">> = useCallback(
    () => ({
      className: styles.root({
        className: cn(classNames?.root, className),
      }),
      style: floatingStyles,
      ref: refs.setFloating,
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
    (): FloatingArrowProps => ({
      context,
      ref: arrowRef,
      className: styles.arrow({
        className: cn(classNames?.arrow, className),
      }),
    }),
    [className, classNames?.arrow, context, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getArrowProps,
      isOpen,
      children: isDisabled ? children : triggerChildren,
      title,
      showArrow,
    }),
    [
      children,
      getArrowProps,
      getRootProps,
      isDisabled,
      isOpen,
      showArrow,
      title,
      triggerChildren,
    ]
  );
};

export namespace useTooltip {
  export interface Props extends TooltipVariants {
    title: string;
    placement?: Placement;
    isDisabled?: boolean;
    offset?: number;
    showArrow?: boolean;
    openDelay?: number;
    closeDelay?: number;
    className?: string;
    classNames?: SlotsToClassNames<TooltipSlots>;
    children: ReactElement<unknown>;
  }
}
