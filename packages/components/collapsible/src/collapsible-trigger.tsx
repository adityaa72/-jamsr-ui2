import { useRenderElement } from "@jamsr-ui/hooks";

import { useCollapsibleContext } from "./collapsible-context";

import type { UIProps } from "@jamsr-ui/utils";

export const CollapsibleTrigger = (props: CollapsibleTrigger.Props) => {
  const { getTriggerProps } = useCollapsibleContext();
  const renderElement = useRenderElement("button", {
    props: getTriggerProps(props),
  });
  return renderElement;
};
export namespace CollapsibleTrigger {
  export interface Props extends UIProps<"button"> {}
}
