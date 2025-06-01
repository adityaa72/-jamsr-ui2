import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useCardContext } from "./card-context";

import type { UIProps } from "@jamsrui/utils";

export const CardFooter = (props: CardFooter.Props) => {
  const { getFooterProps, slotProps } = useCardContext();
  const mergedProps = mergeProps(slotProps?.footer ?? {}, props);

  const renderElement = useRenderElement("div", {
    props: getFooterProps(mergedProps),
  });
  return renderElement;
};

export namespace CardFooter {
  export interface Props extends UIProps<"div"> {}
}
