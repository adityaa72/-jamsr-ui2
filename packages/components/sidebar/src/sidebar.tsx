"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useSidebarContext } from "./sidebar-context";
import { useSidebarState } from "./sidebar-state-provider";
import { useSidebar } from "./use-sidebar";

export const Sidebar = (props: Sidebar.Props) => {
  const { state } = useSidebarState();
  const ctx = useSidebarContext();
  const { getRootProps } = ctx;
  const renderElement = useRenderElement("aside", {
    props: [
      getRootProps(props),
      {
        "data-state": state,
      },
    ],
  });
  return renderElement;
};

export namespace Sidebar {
  export interface Props extends useSidebar.Props {}
}
