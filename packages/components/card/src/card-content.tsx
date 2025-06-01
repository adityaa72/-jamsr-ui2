import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useCardContext } from "./card-context";

import type { UIProps } from "@jamsrui/utils";

export const CardContent = (props: CardContent.Props) => {
  const { getContentProps, slotProps } = useCardContext();
  const mergedProps = mergeProps(slotProps?.content ?? {}, props);
  const renderElement = useRenderElement("div", {
    props: getContentProps(mergedProps),
  });
  return renderElement;
};

export namespace CardContent {
  export interface Props extends UIProps<"div"> {}
}
