import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectItem = (props: SelectItem.Props) => {
  const { getSelectItemProps } = useSelectContext();
  const renderElement = useRenderElement("button", {
    props: [getSelectItemProps(props)],
  });
  return renderElement;
};

export namespace SelectItem {
  export interface Props extends UIProps<"button"> {}
}
