"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useRadioContext } from "./radio-context";

import type { UIProps } from "@jamsrui/utils";

export const RadioIndicator = (props: RadioIndicator.Props) => {
  const { getIndicatorProps, isChecked } = useRadioContext();
  const renderElement = useRenderElement("div", {
    props: [getIndicatorProps(props)],
  });
  if (!isChecked) return null;
  return renderElement;
};

export namespace RadioIndicator {
  export interface Props extends UIProps<"div"> {}
}
