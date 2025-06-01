import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectLabel = (props: SelectLabel.Props) => {
  const { getLabelProps } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getLabelProps(props)],
  });
  return renderElement;
};

export namespace SelectLabel {
  export interface Props extends UIProps<"div"> {}
}
