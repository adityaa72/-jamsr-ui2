"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { UIProps } from "@jamsrui/utils";
import { useNumberFieldContext } from "./number-field-context";

export const NumberFieldIncrementButton = (
  props: NumberFieldIncrementButton.Props
) => {
  const { getIncrementButtonProps } = useNumberFieldContext();
  const renderElement = useRenderElement("button", {
    props: [getIncrementButtonProps(props)],
  });
  return renderElement;
};

export namespace NumberFieldIncrementButton {
  export interface Props extends UIProps<"button"> {}
}
