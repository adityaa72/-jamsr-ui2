import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useButtonConfig } from "./button-config";
import { LoadingSpinner } from "./spinner";
import { useButton } from "./use-button";

export const Button = (props: Button.Props) => {
  const config = useButtonConfig();
  const mergedProps = mergeProps(config, props);
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
  export interface Props extends useButton.Props {}
}
