import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useAccordionContext } from "./accordion-context";
import { useAccordionItemContext } from "./accordion-item-context";

import type { UIProps } from "@jamsrui/utils";

const AccordionHeader = (props: AccordionHeader.Props) => {
  const { children } = props;
  const ctx = useAccordionContext();
  const mergedProps = mergeProps(ctx.slotProps?.header ?? {}, props);
  const { getHeaderProps } = useAccordionItemContext();

  const renderElement = useRenderElement("h3", {
    props: [
      getHeaderProps(mergedProps),
      {
        children,
      },
    ],
  });
  return renderElement;
};

namespace AccordionHeader {
  export interface Props extends UIProps<"h3"> {}
}

export { AccordionHeader };
