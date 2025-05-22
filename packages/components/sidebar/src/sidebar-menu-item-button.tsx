import { useRenderElement } from "@jamsr-ui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsr-ui/utils";

export const SidebarMenuItemButton = (props: SidebarMenuItemButton.Props) => {
  const { getMenuItemButtonProps } = useSidebarContext();
  const renderElement = useRenderElement("div", {
    props: [getMenuItemButtonProps(props)],
  });
  return renderElement;
};

export namespace SidebarMenuItemButton {
  export interface Props extends UIProps<"div"> {}
}
