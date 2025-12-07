"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useDrawerContext } from "./drawer-context";

import type { UIProps } from "@jamsrui/utils";

export const DrawerBody = (props: DrawerBody.Props) => {
  const { getBodyProps } = useDrawerContext();
  const renderElement = useRenderElement("div", {
    props: [getBodyProps(props)],
  });
  return renderElement;
};

export namespace DrawerBody {
  export interface Props extends UIProps<"div"> {}
}
