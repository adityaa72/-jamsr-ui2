"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";

export const SwitchRoot = (props: SwitchRoot.Props) => {
  const { getRootProps } = useSwitchContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps(props)],
  });
  return renderElement;
};

export namespace SwitchRoot {
  export interface Props extends UIProps<"div"> {}
}
