import { useRenderElement } from "@jamsr-ui/hooks";
import { UIProps } from "@jamsr-ui/utils";

const AccordionItem = (props: AccordionItem.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

namespace AccordionItem {
  export interface Props extends UIProps<"div"> {}
  export type Orientation = "horizontal" | "vertical";
}

export { AccordionItem };
