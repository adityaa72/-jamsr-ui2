import { cloneElement, useCallback, useMemo, useRef } from "react";

import {
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useDelayGroup,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useControlledState } from "@jamsrui/hooks";
import { cn } from "@jamsrui/utils";

import { tooltipVariants } from "./styles";

import type { Delay, FloatingArrowProps, Placement } from "@floating-ui/react";
import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";
import type { ReactElement } from "react";

import type { TooltipSlots, TooltipVariants } from "./styles";

export const useTooltip = (props: useTooltip.Props) => {
  const {
    title,
    isDisabled = false,
    delay: delayProp,
    offset: offsetProp = 4,
    placement = "top",
    radius,
    showArrow = false,
    className,
    classNames,
    children,
    defaultOpen,
    isOpen: isOpenProp,
    onOpenChange,
  } = props;

  const [isOpen, setIsOpen] = useControlledState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: isOpenProp,
  });
  const arrowRef = useRef<SVGSVGElement>(null);
  const arrowHeight = showArrow ? 7 : 0;

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetProp + arrowHeight),
      flip({
        fallbackAxisSideDirection: "start",
      }),
      shift(),
      showArrow ? arrow({ element: arrowRef }) : null,
    ],
  });

  const { delay: delayGroup } = useDelayGroup(context);

  let openDelay = 400;
  let closeDelay = 100;
  if (typeof delayProp === "number") {
    openDelay = delayProp;
    closeDelay = delayProp;
  } else if (typeof delayProp === "object") {
    openDelay = delayProp.open ?? openDelay;
    closeDelay = delayProp.close ?? closeDelay;
  }
  if (typeof delayGroup === "number" && delayGroup > 0) {
    openDelay = delayGroup;
    closeDelay = delayGroup;
  } else if (typeof delayGroup === "object") {
    openDelay = delayGroup.open ?? openDelay;
    closeDelay = delayGroup.close ?? closeDelay;
  }

  // const delay =

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
    delay?: Delay;
    // openDelay?: number;
    // closeDelay?: number;
    className?: string;
    classNames?: SlotsToClassNames<TooltipSlots>;
    children: ReactElement<unknown>;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
  }
}
