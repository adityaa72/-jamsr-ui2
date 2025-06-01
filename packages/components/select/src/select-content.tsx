import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectContent = (props: SelectContent.Props) => {
  const { getContentProps } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return renderElement;
};

export namespace SelectContent {
  export interface Props extends UIProps<"div"> {}
}
