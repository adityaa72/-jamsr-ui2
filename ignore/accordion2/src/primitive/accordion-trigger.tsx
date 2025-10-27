import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useAccordionContext } from "./accordion-context";
import { useAccordionItemContext } from "./accordion-item-context";

import type { UIProps } from "@jamsrui/utils";

const AccordionTrigger = (props: AccordionTrigger.Props) => {
  const { children } = props;
  const ctx = useAccordionContext();
  const mergedProps = mergeProps(ctx.slotProps?.trigger ?? {}, props);
  const { getTriggerProps } = useAccordionItemContext();

  const renderElement = useRenderElement("button", {
    props: [
      getTriggerProps(mergedProps),
      {
        children,
      },
    ],
  });
  return renderElement;
};

namespace AccordionTrigger {
  export interface Props extends UIProps<"button"> {}
}

export { AccordionTrigger };
