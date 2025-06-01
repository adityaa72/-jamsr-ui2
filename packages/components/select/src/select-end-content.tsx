import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectEndContent = (props: SelectEndContent.Props) => {
  const { getEndContentProps } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getEndContentProps(props)],
  });
  return renderElement;
};

export namespace SelectEndContent {
  export interface Props extends UIProps<"div"> {}
}
