"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useTooltipContext } from "./tooltip-context";

import type { PropsWithChildren } from "react";

export const TooltipContent = (props: TooltipContent.Props) => {
  const { isOpen, getContentProps } = useTooltipContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  if (!isOpen) return null;
  return renderElement;
};

export namespace TooltipContent {
  export interface Props extends PropsWithChildren {}
}
