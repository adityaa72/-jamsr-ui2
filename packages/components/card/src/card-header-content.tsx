import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useCardContext } from "./card-context";

import type { UIProps } from "@jamsrui/utils";

export const CardHeaderContent = (props: CardHeaderContent.Props) => {
  const { getHeaderContentProps, slotProps } = useCardContext();
  const mergedProps = mergeProps(slotProps?.headerContent ?? {}, props);
  const renderElement = useRenderElement("div", {
    props: getHeaderContentProps(mergedProps),
  });
  return renderElement;
};
export namespace CardHeaderContent {
  export interface Props extends UIProps<"div"> {}
}
