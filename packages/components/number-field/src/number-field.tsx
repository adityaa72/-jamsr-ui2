"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { NumberFieldContext } from "./number-field-context";
import { useNumberField } from "./use-number-field";

export const NumberField = (props: NumberField.Props) => {
  const ctx = useNumberField(props);
  const { getRootProps } = ctx;
  const renderElement = useRenderElement("div", {
    props: [getRootProps({})],
  });
  return <NumberFieldContext value={ctx}>{renderElement}</NumberFieldContext>;
};

export namespace NumberField {
  export interface Props extends useNumberField.Props {}
}
