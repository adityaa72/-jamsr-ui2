import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";
import { useButton } from "./use-button";

export const Button = (props: Button.Props) => {
  const {
    getButtonProps,
    startContent,
    endContent,
    isLoading,
    spinner = <div>Loading...</div>,
  } = useButton(props);
  const composedChildren = (
    <>
      {startContent}
      {isLoading && spinner}
      {props.children}
      {endContent}
    </>
  );

  const button = useRenderElement("button", props, {
    props: [getButtonProps(), { children: composedChildren }],
  });
  return button;
};

export namespace Button {
  export interface Props extends UIProps<"button">, useButton.Props {}
}
