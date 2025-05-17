import { useCallback, useMemo } from "react";

import { mapPropsVariants } from "@jamsr-ui/utils";

import { buttonVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsr-ui/utils";

import type { Button } from "./button";
import type { ButtonVariantProps } from "./styles";

export const useButton = (props: useButton.Props) => {
  const [elementProps, variantKeys] = mapPropsVariants(
    props,
    buttonVariants.variantKeys
  );
  const {
    isDisabled: isDisabledProp,
    disableRipple,
    endContent,
    spinner,
    spinnerPlacement = "start",
    startContent,
    disabled,
    isLoading,
    ...restProps
  } = elementProps;

  const isDisabled = disabled ?? isDisabledProp ?? isLoading;

  const styles = buttonVariants(variantKeys);
  const getButtonProps: PropGetter<Button.Props> = useCallback(
    () => ({
      disabled: isDisabled,
      className: styles,
      "data-loading": isLoading,
      ...restProps,
    }),
    [isDisabled, isLoading, restProps, styles]
  );

  return useMemo(
    () => ({
      getButtonProps,
      startContent,
      endContent,
      isLoading,
      spinner,
      spinnerPlacement,
      disableRipple,
    }),
    [
      getButtonProps,
      startContent,
      endContent,
      isLoading,
      spinner,
      spinnerPlacement,
      disableRipple,
    ]
  );
};

export namespace useButton {
  export interface Props extends ButtonVariantProps, UIProps<"button"> {
    /**
     * If `true`, the button will show a spinner and be non-interactive.
     * Useful for indicating a loading state during async operations.
     */
    isLoading?: boolean;

    /**
     * If `true`, the button will be disabled.
     * Takes precedence over `isLoading`.
     */
    isDisabled?: boolean;

    /**
     * Element to be rendered at the **start** of the button content.
     * Commonly used for icons or prepended text.
     */
    startContent?: React.ReactNode;

    /**
     * Element to be rendered at the **end** of the button content.
     * Commonly used for icons or appended text.
     */
    endContent?: React.ReactNode;

    /**
     * Determines where the spinner appears when `isLoading` is true.
     * Can be `"start"` or `"end"`. Defaults to `"start"`.
     */
    spinnerPlacement?: "start" | "end";

    /**
     * If `true`, disables the ripple effect on click.
     * Recommended for a more minimal or static UI feel.
     */
    disableRipple?: boolean;

    /**
     * If `true`, disables all animations on the button.
     * Useful for performance-sensitive environments or reduced motion settings.
     */
    disableAnimation?: boolean;

    /**
     * A custom spinner element to replace the default loading indicator.
     */
    spinner?: React.ReactNode;
  }
}
