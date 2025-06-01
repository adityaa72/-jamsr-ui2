import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";
import { AnimatePresence } from "motion/react";

import { AccordionContentWrapper } from "./accordion-content-wrapper";
import { useAccordionContext } from "./accordion-context";
import { useAccordionItemContext } from "./accordion-item-context";

import type { UIProps } from "@jamsrui/utils";

const AccordionContent = (props: AccordionContent.Props) => {
  const ctx = useAccordionContext();
  const mergedProps = mergeProps(ctx.slotProps?.content ?? {}, props);

  const { isOpen, getContentProps } = useAccordionItemContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(mergedProps)],
  });
  return (
    <AnimatePresence>
      {!!isOpen && (
        <AccordionContentWrapper>{renderElement}</AccordionContentWrapper>
      )}
    </AnimatePresence>
  );
};

namespace AccordionContent {
  export interface Props extends UIProps<"div"> {}
}

export { AccordionContent };
