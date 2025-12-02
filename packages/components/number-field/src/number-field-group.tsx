"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { UIProps } from "@jamsrui/utils";
import { useNumberFieldContext } from "./number-field-context";

export const NumberFieldGroup = (props: NumberFieldGroup.Props) => {
  const { getGroupProps } = useNumberFieldContext();
  const renderElement = useRenderElement("div", {
    props: [getGroupProps(props)],
  });
  return renderElement;
};

export namespace NumberFieldGroup {
  export interface Props extends UIProps<"div"> {}
}
