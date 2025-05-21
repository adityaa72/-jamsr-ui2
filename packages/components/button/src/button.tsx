import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

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
      {endContent}
    </>
  );

  const button = useRenderElement("button", {
    props: [getButtonProps({}), { children: composedChildren }],
  });
  return button;
};

export namespace Button {
  export interface Props extends useButton.Props { }
}
