import { useRenderElement } from "@jamsr-ui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsr-ui/utils";

export const SwitchLabel = (props: SwitchLabel.Props) => {
  const { getLabelProps, label } = useSwitchContext();
  const renderElement = useRenderElement("label", {
    props: [getLabelProps(props), { children: label }],
  });
  return renderElement;
};

export namespace SwitchLabel {
  export interface Props extends UIProps<"label"> {}
}
