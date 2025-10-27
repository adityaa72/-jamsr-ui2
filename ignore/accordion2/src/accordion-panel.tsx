import { AccordionPanel as PrimitiveAccordionPanel } from "./primitive/accordion-panel";

const AccordionPanel = (props: AccordionPanel.Props) => {
  return <PrimitiveAccordionPanel {...props} />;
};

namespace AccordionPanel {
  export interface Props extends PrimitiveAccordionPanel.Props {}
}

export { AccordionPanel };
