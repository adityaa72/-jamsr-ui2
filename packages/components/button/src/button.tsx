import { useRenderElement } from "@jamsrui/hooks";
import { mergeConfigProps } from "@jamsrui/utils";

import { useButtonConfig } from "./button-config";
import { LoadingSpinner } from "./spinner";
import { buttonVariant } from "./styles";
import { useButton } from "./use-button";

import type { ButtonVariantProps } from "./styles";

export const Button = (props: Button.Props) => {
  const config = useButtonConfig();
  const mergedProps = mergeConfigProps(
    buttonVariant.defaultVariants,
    config,
    props
  );
  const { size } = mergedProps;

  const {
    getButtonProps,
    startContent,
    endContent,
    isLoading,
    spinner = <LoadingSpinner size={size === "xs" ? 14 : 20} />,
    disableRipple,
    spinnerPlacement,
  } = useButton(mergedProps);

  const composedChildren = (
    <>
      {isLoading && spinnerPlacement === "start" ? spinner : startContent}
      {props.children}
      {isLoading && spinnerPlacement === "end" ? spinner : endContent}
    </>
  );

  const button = useRenderElement("button", {
    props: [getButtonProps({}), { children: composedChildren }],
  });
  return button;
};

export namespace Button {
  export interface VariantProps extends ButtonVariantProps {}
  export interface Props extends useButton.Props {}
}
