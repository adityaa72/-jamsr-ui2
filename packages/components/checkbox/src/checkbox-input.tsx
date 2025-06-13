import { useRenderElement } from "@jamsrui/hooks";

import { useCheckboxContext } from "./checkbox-context";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxInput = (props: CheckboxInput.Props) => {
  const { getInputProps } = useCheckboxContext();
  const renderElement = useRenderElement("input", {
    props: [getInputProps(props)],
  });
  return renderElement;
};

export namespace CheckboxInput {
  export interface Props extends UIProps<"input"> {}
}
