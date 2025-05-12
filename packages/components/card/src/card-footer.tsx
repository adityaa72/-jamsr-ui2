import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";
import { useCardContext } from "./card-contex";

export const CardFooter = (props: CardFooter.Props) => {
  const { getFooterProps } = useCardContext();
  const renderElement = useRenderElement("div", {
    props: getFooterProps(props),
  });
  return renderElement;
};

export namespace CardFooter {
  export interface Props extends UIProps<"div"> {}
}
