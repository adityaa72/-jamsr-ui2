import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

export const CardTitle = (props: CardTitle.Props) => {
  const { render, ...cardProps } = props;
  const renderElement = useRenderElement("div", props, {
    props: cardProps,
  });
  return renderElement;
};

export namespace CardTitle {
  export type Props = UIProps<"div">;
}
