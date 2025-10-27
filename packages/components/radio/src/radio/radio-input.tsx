import { useRenderElement } from "@jamsrui/hooks";

import { useRadioContext } from "./radio-context";

import type { UIProps } from "@jamsrui/utils";

export const RadioInput = (props: RadioInput.Props) => {
  const { getInputProps } = useRadioContext();
  const renderElement = useRenderElement("input", {
    props: [getInputProps(props)],
  });
  return renderElement;
};

export namespace RadioInput {
  export interface Props extends UIProps<"input"> {}
}
