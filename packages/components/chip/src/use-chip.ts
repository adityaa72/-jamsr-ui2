"use client";
import { useCallback, useMemo } from "react";

import { dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { chipVariants } from "./styles";

import type { PropGetter } from "@jamsrui/utils";

import type { Chip } from "./chip";
import type { ChipDot } from "./chip-dot";
import type { ChipRoot } from "./chip-root";
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
      getDotProps,
    }),
    [getDotProps, getRootProps]
  );
};
export namespace useChip {
  export interface Props extends ChipRoot.Props, ChipVariantsProps {}
}
