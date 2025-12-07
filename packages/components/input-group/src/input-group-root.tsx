"use client";
import { useRenderElement } from "@jamsrui/hooks";
import type { UIProps } from "@jamsrui/utils";
import { useInputGroupContext } from "./input-group-context";

export const InputGroupRoot = (props: InputGroupRoot.Props) => {
  const { getRootProps } = useInputGroupContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps(props)],
  });
  return renderElement;
};

export namespace InputGroupRoot {
  export interface Props extends UIProps<"div"> {}
}
