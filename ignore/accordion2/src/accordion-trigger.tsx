import { AccordionTrigger as PrimitiveAccordionTrigger } from "./primitive/accordion-trigger";

const AccordionTrigger = (props: AccordionTrigger.Props) => {
  return <PrimitiveAccordionTrigger {...props} />;
};

namespace AccordionTrigger {
  export interface Props extends PrimitiveAccordionTrigger.Props {}
}

export { AccordionTrigger };
