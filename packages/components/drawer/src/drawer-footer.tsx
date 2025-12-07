"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useDrawerContext } from "./drawer-context";

import type { UIProps } from "@jamsrui/utils";

export const DrawerFooter = (props: DrawerFooter.Props) => {
  const { getFooterProps } = useDrawerContext();
  const renderElement = useRenderElement("div", {
    props: [getFooterProps(props)],
  });
  return renderElement;
};

export namespace DrawerFooter {
  export interface Props extends UIProps<"div"> {}
}
