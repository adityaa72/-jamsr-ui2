"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { UIProps } from "@jamsrui/utils";
import { useNumberFieldContext } from "./number-field-context";

export const NumberFieldDecrementButton = (
  props: NumberFieldDecrementButton.Props
) => {
  const { getDecrementButtonProps } = useNumberFieldContext();
  const renderElement = useRenderElement("button", {
    props: [getDecrementButtonProps(props)],
  });
  return renderElement;
};

export namespace NumberFieldDecrementButton {
  export interface Props extends UIProps<"button"> {}
}
