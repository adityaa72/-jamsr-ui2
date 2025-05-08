import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

const AccordionTrigger = (props: AccordionTrigger.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

namespace AccordionTrigger {
  export interface Props extends UIProps<"div"> {}
}

export { AccordionTrigger };
