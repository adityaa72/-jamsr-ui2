import { useRenderElement } from "@jamsr-ui/hooks";

import { useCardContext } from "./card-context";

import type { UIProps } from "@jamsr-ui/utils";

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
