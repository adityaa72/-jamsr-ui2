"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useRadioGroupContext } from "./radio-group-context";

import type { UIProps } from "@jamsrui/utils";

export const RadioGroupRoot = () => {
  const { getRootProps } = useRadioGroupContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps()],
  });
  return renderElement;
};

export namespace RadioGroupRoot {
  export interface Props extends UIProps<"div"> {}
}
