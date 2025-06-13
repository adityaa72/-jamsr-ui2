import { useRenderElement } from "@jamsrui/hooks";

import { useCheckboxContext } from "./checkbox-context";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxTrigger = (props: CheckboxTrigger.Props) => {
  const { getTriggerProps } = useCheckboxContext();
  const renderElement = useRenderElement("div", {
    props: [getTriggerProps(props)],
  });
  return renderElement;
};

export namespace CheckboxTrigger {
  export interface Props extends UIProps<"div"> {}
}
