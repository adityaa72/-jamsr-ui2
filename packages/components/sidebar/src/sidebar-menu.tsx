import { useRenderElement } from "@jamsrui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsrui/utils";

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
