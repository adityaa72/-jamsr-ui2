import { useRenderElement } from "@jamsrui/hooks";

import { useRadioGroupContext } from "./radio-group-context";

import type { UIProps } from "@jamsrui/utils";

export const RadioGroupLabel = (props: RadioGroupLabel.Props) => {
  const { getLabelProps, label } = useRadioGroupContext();
  const renderElement = useRenderElement("div", {
    props: [getLabelProps(props), { children: label }],
  });
  if (!label) return null;
  return renderElement;
};

export namespace RadioGroupLabel {
  export interface Props extends UIProps<"div"> {}
}
