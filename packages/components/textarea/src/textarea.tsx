import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

export const Textarea = (props: Textarea.Props) => {
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", props, {
    props: elementProps,
  });
  return renderElement;
};

export namespace Textarea {
  export interface Props extends UIProps<"div"> {}
}
