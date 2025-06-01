import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectHelperText = (props: SelectHelperText.Props) => {
  const { getHelperTextProps } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getHelperTextProps(props)],
  });
  return renderElement;
};

export namespace SelectHelperText {
  export interface Props extends UIProps<"div"> {}
}
