import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";
import { useCardConfig } from "./card-config";

export const Card = (props: Card.Props) => {
  const { render, ...cardProps } = props;
  const config = useCardConfig();
  const renderElement = useRenderElement("div", props, {
    props: [config, cardProps],
  });
  return renderElement;
};

export namespace Card {
  export interface Props extends UIProps<"div"> {}
}
