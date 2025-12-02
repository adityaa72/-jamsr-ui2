"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { UIProps } from "@jamsrui/utils";
import { useNumberFieldContext } from "./number-field-context";

export const NumberFieldInput = (props: NumberFieldInput.Props) => {
  const { getInputProps } = useNumberFieldContext();
  const renderElement = useRenderElement("input", {
    props: [getInputProps(props)],
  });
  return renderElement;
};

export namespace NumberFieldInput {
  export interface Props extends UIProps<"input"> {}
}
