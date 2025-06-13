import { useRenderElement } from "@jamsrui/hooks";

import { useCheckboxContext } from "./checkbox-context";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxHelperText = (props: CheckboxHelperText.Props) => {
  const { getHelperTextProps } = useCheckboxContext();
  const renderElement = useRenderElement("div", {
    props: [getHelperTextProps(props)],
  });
  return renderElement;
};

export namespace CheckboxHelperText {
  export interface Props extends UIProps<"div"> {}
}
