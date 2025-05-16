import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useCardContext } from "./card-context";

import type { UIProps } from "@jamsr-ui/utils";

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
