"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsrui/utils";

export const SidebarMenuItemButton = (props: SidebarMenuItemButton.Props) => {
  const { getMenuItemButtonProps } = useSidebarContext();
  const renderElement = useRenderElement("button", {
    props: [getMenuItemButtonProps(props)],
  });
  return renderElement;
};

export namespace SidebarMenuItemButton {
  export interface Props extends UIProps<"button"> {}
}
