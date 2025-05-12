import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";
import { useCardContext } from "./card-contex";

export const CardTitle = (props: CardTitle.Props) => {
  const { getTitleProps } = useCardContext();
  const renderElement = useRenderElement("h3", {
    props: getTitleProps(props),
  });
  return renderElement;
};

export namespace CardTitle {
  export interface Props extends UIProps<"h3"> {}
}
