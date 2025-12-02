"use client";

import { CompositeItem } from "@jamsrui/composite";
import { useRenderElement } from "@jamsrui/hooks";

import { useAccordionItemContext } from "./accordion-item-context";

import type { UIProps } from "@jamsrui/utils";

const AccordionTrigger = (props: AccordionTrigger.Props) => {
  const { getTriggerProps } = useAccordionItemContext();
  const renderElement = useRenderElement("button", {
    props: [getTriggerProps(props)],
  });
  return <CompositeItem>{renderElement}</CompositeItem>;
};

namespace AccordionTrigger {
  export interface Props extends UIProps<"button"> {}
}

export { AccordionTrigger };
