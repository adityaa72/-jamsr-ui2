"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useDateFieldContext } from "./date-field-context";

import type { UIProps } from "@jamsrui/utils";

export const DateFieldSeparator = (props: DateFieldSeparator.Props) => {
  const { getSeparatorProps } = useDateFieldContext();
  const renderElement = useRenderElement("span", {
    props: [getSeparatorProps(props), { children: "/" }],
  });
  return renderElement;
};

export namespace DateFieldSeparator {
  export interface Props extends UIProps<"span"> {}
}
