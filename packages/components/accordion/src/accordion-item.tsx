"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { AccordionItemContextProvider } from "./accordion-item-context";
import { useAccordionItem } from "./use-accordion-item";

const AccordionItem = (props: AccordionItem.Props) => {
  const ctx = useAccordionItem(props);
  const { getItemProps } = ctx;
  const renderElement = useRenderElement("div", {
    props: [getItemProps({})],
  });
  return (
    <AccordionItemContextProvider ctx={ctx}>
      {renderElement}
    </AccordionItemContextProvider>
  );
};

namespace AccordionItem {
  export interface Props extends useAccordionItem.Props {}
}

export { AccordionItem };
