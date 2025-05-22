import { useRenderElement } from "@jamsr-ui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsr-ui/utils";

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
