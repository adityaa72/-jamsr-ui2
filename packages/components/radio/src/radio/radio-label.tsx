import { useRenderElement } from "@jamsrui/hooks";

import { useRadioContext } from "./radio-context";

import type { UIProps } from "@jamsrui/utils";

export const RadioLabel = (props: RadioLabel.Props) => {
  const { getLabelProps, label } = useRadioContext();
  const renderElement = useRenderElement("label", {
    props: [getLabelProps(props), { children: label }],
  });
  if (!label) return null;
  return renderElement;
};

export namespace RadioLabel {
  export interface Props extends UIProps<"label"> {}
}
