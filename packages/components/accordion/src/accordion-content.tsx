"use client";

import { UIProps } from "@jamsrui/utils";

import { useRenderElement } from "@jamsrui/hooks";
import { useAccordionItemContext } from "./accordion-item-context";

export const AccordionContent = (props: AccordionContent.Props) => {
  const { getContentProps } = useAccordionItemContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return renderElement;
};

export namespace AccordionContent {
  export interface Props extends UIProps<"div"> {}
}
