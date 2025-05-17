import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useAccordionConfig } from "./accordion-config";
import { AccordionContextProvider } from "./accordion-context";
import { useAccordion } from "./use-accordion";

const Accordion = (props: Accordion.Props) => {
  const config = useAccordionConfig();
  const mergedProps = mergeProps(config ?? {}, props);
  const ctx = useAccordion(mergedProps);
  const { getRootProps } = ctx;

  const renderElement = useRenderElement("div", {
    props: [getRootProps({})],
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
