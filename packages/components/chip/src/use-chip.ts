import { useCallback, useMemo } from "react";

import { dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { chipVariants } from "./styles";

import type { PropGetter } from "@jamsrui/utils";

import type { Chip } from "./chip";
import type { ChipContent } from "./chip-content";
import type { ChipDot } from "./chip-dot";
import { ChipRoot } from "./chip-root";
import type { ChipVariantsProps } from "./styles";

export const useChip = (props: useChip.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    chipVariants.variantKeys
  );

  const { ...elementProps } = $props;
  const styles = chipVariants(variantProps);

  const getRootProps: PropGetter<Chip.Props> = useCallback(
    () => ({
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("chip"),
      ...elementProps,
      className: styles.root({
        className: elementProps.className,
      }),
    }),
    [elementProps, styles]
  );

  const getContentProps: PropGetter<ChipContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getDotProps: PropGetter<ChipDot.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("dot"),
      className: styles.dot({
        className: props.className,
      }),
    }),
    [styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getContentProps,
      getDotProps,
    }),
    [getContentProps, getDotProps, getRootProps]
  );
};
export namespace useChip {
  export interface Props extends ChipRoot.Props, ChipVariantsProps {}
}
