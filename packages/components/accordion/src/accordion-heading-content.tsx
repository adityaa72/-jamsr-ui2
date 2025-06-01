import { useRenderElement } from "@jamsrui/hooks";

import { useAccordionItemContext } from "./accordion-item-context";

import type { UIProps } from "@jamsrui/utils";

export const AccordionHeadingContent = (
  props: AccordionHeadingContent.Props
) => {
  const { getHeadingContentProps } = useAccordionItemContext();
  const renderElement = useRenderElement("div", {
    props: [getHeadingContentProps(props)],
  });
  return renderElement;
};

export namespace AccordionHeadingContent {
  export interface Props extends UIProps<"div"> {}
}
