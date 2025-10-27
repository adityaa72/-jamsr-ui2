import { Accordion as PrimitiveAccordion } from "./primitive/accordion";

const Accordion = (props: Accordion.Props) => {
  return <PrimitiveAccordion {...props} />;
};

namespace Accordion {
  export interface Props extends PrimitiveAccordion.Props {}
}
export { Accordion };
