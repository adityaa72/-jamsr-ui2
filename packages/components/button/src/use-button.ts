import { mergeProps } from "@jamsr-ui/hooks/src/merge-props";
import { mapPropsVariants, UIProps } from "@jamsr-ui/utils";
import { ComponentProps, useCallback, useMemo } from "react";
import { button, ButtonVariantProps } from "./styles";

export const useButton = (_props: useButton.Props) => {
  const [props, variantKeys] = mapPropsVariants(_props, button.variantKeys);
  const {
    isDisabled: isDisabledProp,
    disableRipple,
    endContent,
    spinner,
    spinnerPlacement,
    startContent,
    disabled,
    isLoading,
    ...restProps
  } = props;

  const isDisabled = disabled ?? isDisabledProp ?? isLoading;

  const styles = button(variantKeys);
  const getButtonProps = useCallback(
    (): ComponentProps<"button"> =>
      mergeProps(
        {
          disabled: isDisabled,
          className: styles,
          "data-loading": isLoading,
        },
        restProps
      ),
    [isDisabled, restProps, styles]
  );

  return useMemo(
    () => ({ getButtonProps, startContent, endContent, isLoading, spinner }),
    [endContent, getButtonProps, startContent, isLoading, spinner]
  );
};

export namespace useButton {
  export interface Props extends ButtonVariantProps, UIProps<"button"> {
    isLoading?: boolean;
    isDisabled?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    spinnerPlacement?: "start" | "end";
    disableRipple?: boolean;
    disableAnimation?: boolean;
    spinner?: React.ReactNode;
  }
}
