"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { CheckIcon } from "@jamsrui/icons";

import { useSelectContext } from "./select-context";
import { useSelectItemContext } from "./select-item-context";

import type { UIProps } from "@jamsrui/utils";


export const SelectItemIndicator = (props: SelectItemIndicator.Props) => {
  const { isSelected } = useSelectItemContext();
  const { children = isSelected ? <CheckIcon /> : null, ...restProps } = props;
  const { getItemIndicatorProps } = useSelectContext();
  const renderElement = useRenderElement("span", {
    props: [getItemIndicatorProps(restProps), { children }],
  });
  return renderElement;
};

export namespace SelectItemIndicator {
  export interface Props extends UIProps<"span"> {}
}
