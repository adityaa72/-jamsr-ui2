import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsr-ui/utils";

import { dividerVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsr-ui/utils";

import type { Divider } from "./divider";
import type { DividerSlots, DividerVariants } from "./styles";

export const useDivider = (props: useDivider.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    dividerVariants.variantKeys
  );
  const styles = dividerVariants(variantProps);
  const { classNames, slotProps, ...elementProps } = $props;

  const getRootProps: PropGetter<Divider.Props> = useCallback(
    () => ({
      ...elementProps,
      "data-component": dataAttrDev("divider"),
      "data-slot": "root",
      className: styles.root({
        className: cn(classNames?.root, elementProps.className),
      }),
    }),
    [classNames?.root, elementProps, styles]
  );

  const getDividerProps: PropGetter<Divider.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.divider, props),
      "data-slot": "divider",
      className: styles.divider({
        className: cn(
          slotProps?.divider?.className,
          classNames?.divider,
          props.className
        ),
      }),
    }),
    [classNames?.divider, slotProps?.divider, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getDividerProps,
    }),
    [getRootProps, getDividerProps]
  );
};
export namespace useDivider {
  export interface Props extends UIProps<"div">, DividerVariants {
    classNames?: SlotsToClassNames<DividerSlots>;
    slotProps?: {
      divider?: UIProps<"div">;
    };
  }
}
