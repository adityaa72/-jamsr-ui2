import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

export const CardContent = (props: CardContent.Props) => {
  const { render, ...cardProps } = props;
  const renderElement = useRenderElement("div", props, {
    props: cardProps,
  });
  return renderElement;
};

export namespace CardContent {
  export interface Props extends UIProps<"div"> {}
}
