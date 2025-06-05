import { useRenderElement } from "@jamsrui/hooks";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputField = (props: InputField.Props) => {
  const { getInputProps } = useInputContext();
  const renderElement = useRenderElement("input", {
    props: [getInputProps(props)],
  });
  return renderElement;
};

export namespace InputField {
  export interface Props extends UIProps<"input"> {}
}
