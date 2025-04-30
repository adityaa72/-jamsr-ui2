import { UIProps, useRenderElement } from "@jamsr-ui/utils";
import { useAccordionConfig } from "./accordion-config";

const Accordion = (props: Accordion.Props) => {
  const config = useAccordionConfig();
  const { render, ...elementProps } = props;
  const renderElement = useRenderElement("div", props, {
    props: [config, elementProps],
  });
  return renderElement;
};

namespace Accordion {
  export type Props = UIProps<"div">;
}

export { Accordion };
