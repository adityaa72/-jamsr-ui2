import { useRenderElement } from "@jamsrui/hooks";

import { useCheckboxContext } from "./checkbox-context";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxLabel = (props: CheckboxLabel.Props) => {
  const { getLabelProps, label } = useCheckboxContext();
  const renderElement = useRenderElement("div", {
    props: [getLabelProps(props), { children: label }],
  });
  if (!label) return null;
  return renderElement;
};

export namespace CheckboxLabel {
  export interface Props extends UIProps<"div"> {}
}
