"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import { CheckIcon } from "@jamsrui/icons";
import type { UIProps } from "@jamsrui/utils";
import { useSelectItemContext } from "./select-item-context";

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
