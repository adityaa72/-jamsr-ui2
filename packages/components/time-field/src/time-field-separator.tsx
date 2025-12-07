"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useTimeFieldContext } from "./time-field-context";

import type { UIProps } from "@jamsrui/utils";

export const TimeFieldSeparator = (props: TimeFieldSeparator.Props) => {
  const { getSeparatorProps } = useTimeFieldContext();
  const renderElement = useRenderElement("span", {
    props: [getSeparatorProps(props), { children: ":" }],
  });
  return renderElement;
};

export namespace TimeFieldSeparator {
  export interface Props extends UIProps<"span"> {}
}
