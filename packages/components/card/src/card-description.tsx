import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";
import { useCardContext } from "./card-contex";

export const CardDescription = (props: CardDescription.Props) => {
  const { getDescriptionProps } = useCardContext();
  const renderElement = useRenderElement("p", {
    props: getDescriptionProps(props),
  });
  return renderElement;
};

export namespace CardDescription {
  export interface Props extends UIProps<"p"> {}
}
