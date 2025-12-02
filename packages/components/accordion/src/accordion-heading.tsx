"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useAccordionItemContext } from "./accordion-item-context";

import type { UIProps } from "@jamsrui/utils";

export const AccordionHeading = (props: AccordionHeading.Props) => {
  const { getHeadingProps } = useAccordionItemContext();
  const renderElement = useRenderElement("div", {
    props: [getHeadingProps(props)],
  });
  return renderElement;
};

export namespace AccordionHeading {
  export interface Props extends UIProps<"div"> {}
}
