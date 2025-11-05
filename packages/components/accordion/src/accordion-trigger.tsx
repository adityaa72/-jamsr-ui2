import { CompositeItem } from "@jamsrui/composite";
import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useAccordionContext } from "./accordion-context";
import { AccordionHeadingContent } from "./accordion-heading-content";
import { AccordionIndicator } from "./accordion-indicator";
import { useAccordionItemContext } from "./accordion-item-context";

import type { UIProps } from "@jamsrui/utils";

const AccordionTrigger = (props: AccordionTrigger.Props) => {
  const { children } = props;
  const ctx = useAccordionContext();
  const mergedProps = mergeProps(ctx.slotProps?.trigger ?? {}, props);
  const { getTriggerProps } = useAccordionItemContext();

  const composedChildren = (
    <>
      <AccordionHeadingContent>{children}</AccordionHeadingContent>
      {ctx.hideIndicator ? null : <AccordionIndicator />}
    </>
  );

  const renderElement = useRenderElement("button", {
    props: [
      getTriggerProps(mergedProps),
      {
        children: composedChildren,
      },
    ],
  });
  return <CompositeItem>{renderElement}</CompositeItem>;
};

namespace AccordionTrigger {
  export interface Props extends UIProps<"button"> {}
}

export { AccordionTrigger };
