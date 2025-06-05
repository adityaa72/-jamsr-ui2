import { useRenderElement } from "@jamsrui/hooks";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputLabel = (props: InputLabel.Props) => {
  const { getLabelProps, label } = useInputContext();
  const renderElement = useRenderElement("label", {
    props: [getLabelProps(props), { children: label }],
  });
  if (!label) return null;
  return renderElement;
};

export namespace InputLabel {
  export interface Props extends UIProps<"label"> {}
}
