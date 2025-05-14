import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps  } from "@jamsr-ui/utils";

import { useCardContext } from "./card-context";

import type {UIProps} from "@jamsr-ui/utils";


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
