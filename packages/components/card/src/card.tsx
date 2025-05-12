import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps, UIProps } from "@jamsr-ui/utils";
import { useCardConfig } from "./card-config";
import { CardVariants } from "./styles";
import { useCard } from "./use-card";
import { CardContextProvider } from "./card-contex";

export const Card = (props: Card.Props) => {
  const config = useCardConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useCard(mergedProps);

  const renderElement = useRenderElement("div", {
    props: ctx.getBasePops(),
  });
  return <CardContextProvider ctx={ctx}>{renderElement}</CardContextProvider>;
};

export namespace Card {
  export interface Props extends UIProps<"div">, CardVariants {}
}
