"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useInputGroupContext } from "./input-group-context";

import type { UIProps } from "@jamsrui/utils";

export const InputGroupPrefix = (props: InputGroupPrefix.Props) => {
  const { getPrefixProps } = useInputGroupContext();
  const renderElement = useRenderElement("div", {
    props: [getPrefixProps(props)],
  });
  return renderElement;
};

export namespace InputGroupPrefix {
  export interface Props extends UIProps<"div"> {}
}
