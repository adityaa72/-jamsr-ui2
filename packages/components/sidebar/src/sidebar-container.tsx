"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsrui/utils";

export const SidebarContainer = (props: SidebarContainer.Props) => {
  const { getContainerProps } = useSidebarContext();
  const renderElement = useRenderElement("div", {
    props: [getContainerProps(props)],
  });
  return renderElement;
};

export namespace SidebarContainer {
  export interface Props extends UIProps<"div"> {}
}
