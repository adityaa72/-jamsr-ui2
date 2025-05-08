import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

const AccordionContent = (props: AccordionContent.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

namespace AccordionContent {
  export interface Props extends UIProps<"div"> {}
}

export { AccordionContent };
