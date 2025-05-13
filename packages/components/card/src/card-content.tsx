import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";
import { useCardContext } from "./card-context";

export const CardContent = (props: CardContent.Props) => {
  const { getContentProps } = useCardContext();
  const renderElement = useRenderElement("div", {
    props: getContentProps(props),
  });
  return renderElement;
};

export namespace CardContent {
  export interface Props extends UIProps<"div"> {}
}
