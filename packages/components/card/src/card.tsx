import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useCardConfig } from "./card-config";
import { CardContextProvider } from "./card-context";
import { useCard } from "./use-card";

export const Card = (props: Card.Props) => {
  const config = useCardConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useCard(mergedProps);

  const renderElement = useRenderElement("div", {
    props: ctx.getRootProps({}),
  });
  return <CardContextProvider ctx={ctx}>{renderElement}</CardContextProvider>;
};

export namespace Card {
  export interface Props extends useCard.Props {}
}
