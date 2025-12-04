"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useRadioContext } from "./radio-context";

import type { UIProps } from "@jamsrui/utils";

export const RadioRoot = (props: RadioRoot.Props) => {
  const { getRootProps } = useRadioContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps(props)],
  });
  return renderElement;
};

export namespace RadioRoot {
  export interface Props extends UIProps<"div"> {}
}
