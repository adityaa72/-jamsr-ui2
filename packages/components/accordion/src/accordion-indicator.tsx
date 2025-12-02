"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useAccordionItemContext } from "./accordion-item-context";
import { ChevronDownIcon } from "./icons";

import type { UIProps } from "@jamsrui/utils";

export const AccordionIndicator = (props: AccordionIndicator.Props) => {
  const { children = <ChevronDownIcon />, ...restProps } = props;
  const { getIndicatorProps } = useAccordionItemContext();
  const renderElement = useRenderElement("span", {
    props: [getIndicatorProps(restProps), { children }],
  });
  return renderElement;
};

export namespace AccordionIndicator {
  export interface Props extends UIProps<"span"> {}
}
