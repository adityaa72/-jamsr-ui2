import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectIndicator = (props: SelectIndicator.Props) => {
  const { getIndicatorProps } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getIndicatorProps(props)],
  });
  return renderElement;
};

export namespace SelectIndicator {
  export interface Props extends UIProps<"div"> {}
}
