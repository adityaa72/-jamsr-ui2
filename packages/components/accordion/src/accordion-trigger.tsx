import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useAccordionContext } from "./accordion-context";
import { useAccordionItemContext } from "./accordion-item-context";

import type { UIProps } from "@jamsr-ui/utils";

const AccordionTrigger = (props: AccordionTrigger.Props) => {
  const ctx = useAccordionContext();
  const mergedProps = mergeProps(ctx.slotProps?.trigger ?? {}, props);

  const { getTriggerProps } = useAccordionItemContext();
  const renderElement = useRenderElement("button", {
    props: [getTriggerProps(mergedProps)],
  });
  return renderElement;
};

namespace AccordionTrigger {
  export interface Props extends UIProps<"button"> {}
}

export { AccordionTrigger };
