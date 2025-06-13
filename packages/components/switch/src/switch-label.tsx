import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";

export const SwitchLabel = (props: SwitchLabel.Props) => {
  const { getLabelProps, label } = useSwitchContext();
  const renderElement = useRenderElement("label", {
    props: [getLabelProps(props), { children: label }],
  });
  if(!label) return null;
  return renderElement;
};

export namespace SwitchLabel {
  export interface Props extends UIProps<"label"> {}
}
