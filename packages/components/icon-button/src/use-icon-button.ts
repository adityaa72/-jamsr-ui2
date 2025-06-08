import { useCallback, useId, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { iconButtonVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";
import type { ComponentProps } from "react";

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
    className,
    ...restProps
  } = $props;

  const styles = iconButtonVariants(variantProps);
  const id = useId();
  const isDisabled = isDisabledProp ?? isLoading ?? disabled;

  const getButtonProps = useCallback(
    (): Partial<IconButton.Props> => ({
      ...restProps,
      "data-component": dataAttrDev("icon-button"),
      className: cn(styles, className),
      "aria-label": labelProp,
      "aria-labelledby": id,
      type,
      disabled: isDisabled,
      "data-disabled": isDisabled,
      "aria-disabled": isDisabled,
    }),
    [className, id, isDisabled, labelProp, restProps, styles, type]
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
