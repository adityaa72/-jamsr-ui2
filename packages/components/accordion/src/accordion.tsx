import { useRenderElement } from "@jamsr-ui/hooks";

import { useAccordionConfig } from "./accordion-config";

import type { UIProps } from "@jamsr-ui/utils";

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
