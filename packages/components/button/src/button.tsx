import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps, UIProps } from "@jamsr-ui/utils";
import { useButtonConfig } from "./button-config";
import { useButton } from "./use-button";

export const Button = (props: Button.Props) => {
  const config = useButtonConfig();
  const mergedProps = mergeProps(config, props);

  const {
    getButtonProps,
    startContent,
    endContent,
    isLoading,
    spinner = <div>Loading...</div>,
  } = useButton(mergedProps);
  const composedChildren = (
    <>
      {startContent}
      {isLoading && spinner}
      {props.children}
      {endContent}
    </>
  );

  const button = useRenderElement("button", {
    props: [getButtonProps(), { children: composedChildren }],
  });
  return button;
};

export namespace Button {
  export interface Props extends UIProps<"button">, useButton.Props {}
}
