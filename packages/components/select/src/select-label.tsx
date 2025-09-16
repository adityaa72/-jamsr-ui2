import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectLabel = (props: SelectLabel.Props) => {
  const { getLabelProps, label } = useSelectContext();
  const renderElement = useRenderElement("label", {
    props: [getLabelProps(props), { children: label }],
  });
  if(!label) return null;
  return renderElement;
};

export namespace SelectLabel {
  export interface Props extends UIProps<"label"> {}
}
