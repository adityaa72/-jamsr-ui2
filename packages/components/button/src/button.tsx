import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";
import { useButton } from "./use-button";

export const Button = (props: Button.Props) => {
  const { getButtonProps, startContent, endContent } = useButton(props);
  const composedChildren = (
    <>
      {startContent}
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
