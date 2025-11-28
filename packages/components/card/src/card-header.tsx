"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useCardContext } from "./card-context";

import type { UIProps } from "@jamsrui/utils";

export const CardHeader = (props: CardHeader.Props) => {
  const { getHeaderProps } = useCardContext();
  const renderElement = useRenderElement("div", {
    props: [getHeaderProps(props)],
  });
  return renderElement;
};

export namespace CardHeader {
  export interface Props extends UIProps<"div"> {}
}
