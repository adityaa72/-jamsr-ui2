import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectStartContent = (props: SelectStartContent.Props) => {
  const { getStartContentProps } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getStartContentProps(props)],
  });
  return renderElement;
};

export namespace SelectStartContent {
  export interface Props extends UIProps<"div"> {}
}
