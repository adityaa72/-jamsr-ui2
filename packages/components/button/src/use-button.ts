import { mergeProps } from "@jamsr-ui/hooks/src/merge-props";
import { mapPropsVariants, UIProps } from "@jamsr-ui/utils";
import { ComponentProps, useCallback, useMemo } from "react";
import { button, ButtonVariantProps } from "./styles";

export const useButton = (_props: useButton.Props) => {
  const [props, variantKeys] = mapPropsVariants(_props, button.variantKeys);
  const {
    isDisabled,
    isLoading,
    disableRipple,
    endContent,
    spinner,
    spinnerPlacement,
    startContent,
    ...restProps
  } = props;
  const styles = button(variantKeys);

  const getButtonProps = useCallback(
    (): ComponentProps<"button"> =>
      mergeProps(
        {
          disabled: isDisabled,
          className: styles,
        },
        restProps
      ),
    [isDisabled, restProps, styles]
  );

  return useMemo(
    () => ({ getButtonProps, startContent, endContent }),
    [endContent, getButtonProps, startContent]
  );
};

export namespace useButton {
  export interface Props extends ButtonVariantProps, UIProps<"button"> {
    isDisabled?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    isLoading?: boolean;
    spinnerPlacement?: "start" | "end";
    disableRipple?: boolean;
    disableAnimation?: boolean;
    spinner?: React.ReactNode;
  }
}
