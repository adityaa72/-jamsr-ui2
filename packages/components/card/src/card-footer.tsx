"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useCardContext } from "./card-context";

import type { UIProps } from "@jamsrui/utils";

export const CardFooter = (props: CardFooter.Props) => {
  const { getFooterProps } = useCardContext();
  const renderElement = useRenderElement("div", {
    props: getFooterProps(props),
  });
  return renderElement;
};

export namespace CardFooter {
  export interface Props extends UIProps<"div"> {}
}
