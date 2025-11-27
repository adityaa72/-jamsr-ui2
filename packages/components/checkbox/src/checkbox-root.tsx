"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useCheckboxContext } from "./checkbox-context";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxRoot = (_prop: CheckboxRoot.Props) => {
  const { getRootProps } = useCheckboxContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps()],
  });
  return renderElement;
};

export namespace CheckboxRoot {
  export interface Props extends UIProps<"div"> {}
}
