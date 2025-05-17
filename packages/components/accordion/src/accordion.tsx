import { Children } from "react";

import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useAccordionConfig } from "./accordion-config";
import { AccordionContextProvider } from "./accordion-context";
import { AccordionListItemContext } from "./accordion-list-provider";
import { useAccordion } from "./use-accordion";

const Accordion = (props: Accordion.Props) => {
  const config = useAccordionConfig();
  const mergedProps = mergeProps(config ?? {}, props);
  const ctx = useAccordion(mergedProps);
  const { getRootProps } = ctx;
  const { children } = mergedProps;

  const composedChildren = Children.map(children, (child, index) => {
    return (
      <AccordionListItemContext value={{ index }}>
        {child}
      </AccordionListItemContext>
    );
  });

  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children: composedChildren }],
  });
  return (
    <AccordionContextProvider ctx={ctx}>
      {renderElement}
    </AccordionContextProvider>
  );
};

namespace Accordion {
  export interface Props extends useAccordion.Props {}
}

export { Accordion };
