import { useRenderElement } from "@jamsrui/hooks";

import { useAccordionItemContext } from "./accordion-item-context";
import { ChevronDownIcon } from "./icons";

import type { UIProps } from "@jamsrui/utils";

export const AccordionIndicator = (props: AccordionIndicator.Props) => {
  const { getIndicatorProps, indicator } = useAccordionItemContext();
  const renderElement = useRenderElement("span", {
    props: [
      getIndicatorProps(props),
      { children: indicator ?? <ChevronDownIcon /> },
    ],
  });
  return renderElement;
};

export namespace AccordionIndicator {
  export interface Props extends UIProps<"span"> {}
}
