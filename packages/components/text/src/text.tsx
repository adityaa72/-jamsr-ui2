import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

export const Text = (props: Text.Props) => {
  const { render, ...textProps } = props;
  const renderElement = useRenderElement("p", props, {
    props: textProps,
  });
  return renderElement;
};

export namespace Text {
  export interface Props extends UIProps<"p"> {}
}
