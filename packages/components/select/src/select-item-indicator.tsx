"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectItemIndicator = (props: SelectItemIndicator.Props) => {
  const { getItemIndicatorProps } = useSelectContext();
  const renderElement = useRenderElement("span", {
    props: [getItemIndicatorProps(props)],
  });
  return renderElement;
};

export namespace SelectItemIndicator {
  export interface Props extends UIProps<"span"> {}
}
