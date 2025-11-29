"use client";

import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";
import { useSidebarContext } from "./sidebar-context";

export const SidebarInset = (props: SidebarInset.Props) => {
  const { getInsetProps } = useSidebarContext();
  const renderElement = useRenderElement("div", {
    props: [getInsetProps(props)],
  });
  return renderElement;
};

export namespace SidebarInset {
  export interface Props extends UIProps<"div"> {}
}
