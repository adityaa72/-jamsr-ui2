"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useChipContext } from "./chip-context";

import type { UIProps } from "@jamsrui/utils";

export const ChipContent = (props: ChipContent.Props) => {
  const { getContentProps } = useChipContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return renderElement;
};

export namespace ChipContent {
  export interface Props extends UIProps<"div"> {}
}
