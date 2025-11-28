"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useCardContext } from "./card-context";

import type { UIProps } from "@jamsrui/utils";

export const CardContent = (props: CardContent.Props) => {
  const { getContentProps } = useCardContext();
  const renderElement = useRenderElement("div", {
    props: getContentProps(props),
  });
  return renderElement;
};

export namespace CardContent {
  export interface Props extends UIProps<"div"> {}
}
