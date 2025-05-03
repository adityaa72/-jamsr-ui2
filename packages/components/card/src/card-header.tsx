import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

export const CardHeader = (props: CardHeader.Props) => {
  const { render, ...cardProps } = props;
  const renderElement = useRenderElement("div", props, {
    props: cardProps,
  });
  return renderElement;
};

export namespace CardHeader {
  export type Props = UIProps<"div">;
}
