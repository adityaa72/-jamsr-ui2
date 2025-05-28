import { ComponentProps, useCallback, useId, useMemo } from "react";

import { dataAttrDev, mapPropsVariants } from "@jamsr-ui/utils";

import { iconButtonVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsr-ui/utils";

import type { IconButton } from "./icon-button";
import type { IconButtonVariantProps } from "./styles";

export const useIconButton = (props: useIconButton.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    iconButtonVariants.variantKeys
  );

  const {
    type = "button",
    label: labelProp,
    isDisabled: isDisabledProp,
    isLoading,
    disabled,
    ...restProps
  } = $props;

  const styles = iconButtonVariants(variantProps);
  const id = useId();
  const isDisabled = isDisabledProp ?? isLoading ?? disabled;

  const getButtonProps = useCallback(
    (): Partial<IconButton.Props> => ({
      ...restProps,
      "data-component": dataAttrDev("icon-button"),
      className: styles,
      "aria-label": labelProp,
      "aria-labelledby": id,
      type,
      disabled: isDisabled,
      "data-disabled": isDisabled,
      "aria-disabled": isDisabled,
    }),
    [id, isDisabled, labelProp, restProps, styles, type]
  );

  const getLabelProps: PropGetter<ComponentProps<"span">> = useCallback(() => {
    return {
      "aria-hidden": true,
      id,
      className: "sr-only",
    };
  }, [id]);

  return useMemo(
    () => ({ getButtonProps, getLabelProps, isLoading, isDisabled }),
    [getButtonProps, getLabelProps, isDisabled, isLoading]
  );
};
export namespace useIconButton {
  export interface Props extends IconButtonVariantProps, UIProps<"button"> {
    label: string;
    isDisabled?: boolean;
    isLoading?: boolean;
  }
}
