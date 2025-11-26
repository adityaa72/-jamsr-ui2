"use client";

import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";
import { useInputGroupContext } from "./input-group-context";

export const InputGroupSuffix = (props: InputGroupSuffix.Props) => {
  const { getSuffixProps } = useInputGroupContext();
  const renderElement = useRenderElement("div", {
    props: [getSuffixProps(props)],
  });
  return renderElement;
};

export namespace InputGroupSuffix {
  export interface Props extends UIProps<"div"> {}
}
