import { useRenderElement } from "@jamsrui/hooks";

import { useCheckboxContext } from "./checkbox-context";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxLabel = (props: CheckboxLabel.Props) => {
  const { getLabelProps } = useCheckboxContext();
  const renderElement = useRenderElement("label", {
    props: [getLabelProps(props)],
  });
  return renderElement;
};

export namespace CheckboxLabel {
  export interface Props extends UIProps<"label"> {}
}
