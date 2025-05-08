import { UIProps } from "@jamsr-ui/utils";
import { useAccordionConfig } from "./accordion-config";
import { useRenderElement } from "@jamsr-ui/hooks";

const Accordion = (props: Accordion.Props) => {
  const config = useAccordionConfig();
  const renderElement = useRenderElement("div", {
    props: [config, props],
  });
  return renderElement;
};

namespace Accordion {
  export interface Props extends UIProps<"div"> {}
}

export { Accordion };
