import { useRenderElement } from "@jamsr-ui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsr-ui/utils";

export const SidebarGroup = (props: SidebarGroup.Props) => {
  const { getGroupProps } = useSidebarContext();
  const renderElement = useRenderElement("div", {
    props: [getGroupProps(props)],
  });
  return renderElement;
};

export namespace SidebarGroup {
  export interface Props extends UIProps<"div"> {}
}
