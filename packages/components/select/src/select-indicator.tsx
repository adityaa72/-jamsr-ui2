"use client";

import { useRenderElement } from "@jamsrui/hooks";
import { ChevronDownIcon } from "@jamsrui/icons";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectIndicator = (props: SelectIndicator.Props) => {
  const { children = <ChevronDownIcon />, ...restProps } = props;
  const { getIndicatorProps } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getIndicatorProps(restProps), { children }],
  });
  return renderElement;
};

export namespace SelectIndicator {
  export interface Props extends UIProps<"div"> {}
}
