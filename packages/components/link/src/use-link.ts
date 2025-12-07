"use client";
import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { linkVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { Link } from "./link";
import type { LinkVariants } from "./styles";

export const useLink = (props: useLink.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    linkVariants.variantKeys
  );
  const styles = linkVariants(variantProps);

  const getRootProps: PropGetter<Link.Props> = useCallback(
    () => ({
      ...$props,
      "data-component": dataAttrDev("link"),
      className: cn(styles, $props.className),
    }),
    [$props, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
    }),
    [getRootProps]
  );
};
export namespace useLink {
  export interface Props extends UIProps<"a">, LinkVariants {}
}
