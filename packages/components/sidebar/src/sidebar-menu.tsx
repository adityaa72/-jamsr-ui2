import { useRenderElement } from "@jamsr-ui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsr-ui/utils";

export const SidebarMenu = (props: SidebarMenu.Props) => {
  const { getMenuProps } = useSidebarContext();
  const renderElement = useRenderElement("div", {
    props: [getMenuProps(props)],
  });
  return renderElement;
};

export namespace SidebarMenu {
  export interface Props extends UIProps<"div"> {}
}
