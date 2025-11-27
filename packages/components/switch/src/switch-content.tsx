"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";

export const SwitchContent = (props: SwitchContent.Props) => {
  const { getContentProps } = useSwitchContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return renderElement;
};

export namespace SwitchContent {
  export interface Props extends UIProps<"div"> {}
}
