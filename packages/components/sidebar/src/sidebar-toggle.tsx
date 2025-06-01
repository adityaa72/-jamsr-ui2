import { useRenderElement } from "@jamsrui/hooks";

import { SidebarLeftIcon } from "./icons";
import { useSidebarState } from "./sidebar-provider";

import type { UIProps } from "@jamsrui/utils";

export const SidebarToggle = (props: SidebarToggle.Props) => {
  const { toggleSidebar } = useSidebarState();
  const children = <SidebarLeftIcon />;
  const renderElement = useRenderElement("button", {
    props: [props, { onClick: toggleSidebar }, { children }],
  });
  return renderElement;
};

export namespace SidebarToggle {
  export interface Props extends UIProps<"button"> {}
}
