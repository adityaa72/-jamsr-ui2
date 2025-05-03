import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

export const Card = (props: Card.Props) => {
  const { render, ...cardProps } = props;
  const renderElement = useRenderElement("div", props, {
    props: cardProps,
  });
  return renderElement;
};

export namespace Card {
  export type Props = UIProps<"div">;
}
