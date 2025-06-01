import { useRenderElement } from "@jamsrui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsrui/utils";

export const SidebarMenuItem = (props: SidebarMenuItem.Props) => {
  const { getMenuItemProps } = useSidebarContext();
  const renderElement = useRenderElement("div", {
    props: [getMenuItemProps(props)],
  });
  return renderElement;
};

export namespace SidebarMenuItem {
  export interface Props extends UIProps<"div"> {}
}
