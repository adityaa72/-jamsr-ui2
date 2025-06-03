import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectTrigger = (props: SelectTrigger.Props) => {
  const { getTriggerProps } = useSelectContext();
  const renderElement = useRenderElement("button", {
    props: [getTriggerProps(props)],
  });
  return renderElement;
};

export namespace SelectTrigger {
  export interface Props extends UIProps<"button"> {}
}
