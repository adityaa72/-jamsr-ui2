import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";

export const SwitchLabel = (props: SwitchLabel.Props) => {
  const { getLabelProps } = useSwitchContext();
  const renderElement = useRenderElement("span", {
    props: [getLabelProps(props)],
  });
  return renderElement;
};

export namespace SwitchLabel {
  export interface Props extends UIProps<"span"> {}
}
