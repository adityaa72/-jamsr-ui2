import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useAccordionContext } from "./accordion-context";
import { useAccordionItemContext } from "./accordion-item-context";

import type { UIProps } from "@jamsrui/utils";

export const AccordionContent = (props: AccordionContent.Props) => {
  const ctx = useAccordionContext();
  const mergedProps = mergeProps(ctx.slotProps?.content ?? {}, props);
  const { getContentProps } = useAccordionItemContext();
  const renderElement = useRenderElement("h3", {
    props: [getContentProps(mergedProps)],
  });
  return renderElement;
};

export namespace AccordionContent {
  export interface Props extends UIProps<"div"> {}
}
