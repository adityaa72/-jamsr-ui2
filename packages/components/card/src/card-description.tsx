import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

export const CardDescription = (props: CardDescription.Props) => {
  const { render, ...cardProps } = props;
  const renderElement = useRenderElement("p", props, {
    props: cardProps,
  });
  return renderElement;
};

export namespace CardDescription {
  export type Props = UIProps<"p">;
}
