import { useCallback, useId, useMemo } from "react";

import { useHover, useMergeRefs, usePress } from "@jamsrui/hooks";
import { cn, dataAttr, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

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
    isDisabled: isDisabledProp = false,
    isLoading = false,
    disabled = false,
    className,
    ref,
    ...restProps
  } = $props;

  const styles = iconButtonVariants(variantProps);
  const id = useId();
  const isDisabled = isDisabledProp || isLoading || disabled;

  const { isHovered, ref: hoverRef } = useHover({
    isDisabled,
  });
  const { isPressed, ref: pressRef } = usePress({
    isDisabled,
  });
  const mergedRefs = useMergeRefs([ref, hoverRef, pressRef]);

  const getButtonProps = useCallback(
    (): Partial<IconButton.Props> => ({
      ...restProps,
      ref: mergedRefs,
      "data-component": dataAttrDev("icon-button"),
      className: cn(styles, className),
      "aria-labelledby": id,
      type,
      disabled: isDisabled,
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      "data-loading": dataAttr(isLoading),
      "data-pressed": dataAttr(isPressed),
      "data-hover": dataAttr(isHovered),
    }),
    [
      className,
      id,
      isDisabled,
      isHovered,
      isLoading,
      isPressed,
      mergedRefs,
      restProps,
      styles,
      type,
    ]
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
