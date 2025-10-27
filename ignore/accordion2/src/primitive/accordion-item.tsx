import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useAccordionContext } from "./accordion-context";
import { AccordionItemContextProvider } from "./accordion-item-context";
import { useAccordionItem } from "./use-accordion-item";

const AccordionItem = (props: AccordionItem.Props) => {
  const rootCtx = useAccordionContext();
  const mergedProps = mergeProps(rootCtx.slotProps?.item ?? {}, props);
  const ctx = useAccordionItem(mergedProps);
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
