import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectValue = (props: SelectValue.Props) => {
  const { getValueProps, getRenderValue } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getValueProps(props), { children: getRenderValue }],
  });
  return renderElement;
};

export namespace SelectValue {
  export interface Props extends UIProps<"div"> {}
}
