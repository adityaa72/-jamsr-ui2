"use client";
import { useCallback, useMemo } from "react";

import { useHover, useMergeRefs, usePress } from "@jamsrui/hooks";
import { cn, dataAttr, mapPropsVariants } from "@jamsrui/utils";

import { buttonVariant } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { ButtonRoot } from "./button";

export const useButton = (props: useButton.Props) => {
  const [elementProps, variantKeys] = mapPropsVariants(
    props,
    buttonVariant.variantKeys
  );
  const {
    disabled = false,
    isLoading = false,
    className,
    ref,
    ...restProps
  } = elementProps;

  const isDisabled = disabled || isLoading;
  const styles = buttonVariant(variantKeys);

  const { isHovered, ref: hoverRef } = useHover({
    isDisabled,
  });
  const { isPressed, ref: pressRef } = usePress({
    isDisabled,
  });
  const mergedRefs = useMergeRefs([ref, hoverRef, pressRef]);

  const getButtonProps: PropGetter<ButtonRoot.Props> = useCallback(
    () => ({
      ...restProps,
      ref: mergedRefs,
      disabled: isDisabled,
      className: cn(styles, className),
      "data-loading": dataAttr(isLoading),
      "data-pressed": dataAttr(isPressed),
      "data-hover": dataAttr(isHovered),
    }),
    [
      className,
      isDisabled,
      isHovered,
      isLoading,
      isPressed,
      mergedRefs,
      restProps,
      styles,
    ]
  );

  return useMemo(
    () => ({
      getButtonProps,
      isLoading,
    }),
    [getButtonProps, isLoading]
  );
};

export namespace useButton {
  export interface VariantProps extends ButtonRoot.VariantProps {}
  export interface Props extends VariantProps, UIProps<"button"> {
    /**
     * If `true`, the button will show a spinner and be non-interactive.
     * Useful for indicating a loading state during async operations.
     */
    isLoading?: boolean;

    /**
     * If `true`, disables all animations on the button.
     * Useful for performance-sensitive environments or reduced motion settings.
     */
    disableAnimation?: boolean;
  }
}
