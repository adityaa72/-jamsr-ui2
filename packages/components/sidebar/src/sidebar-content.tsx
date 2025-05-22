import { useRenderElement } from "@jamsr-ui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsr-ui/utils";

export const SidebarContent = (props: SidebarContent.Props) => {
  const { getContentProps } = useSidebarContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return renderElement;
};

export namespace SidebarContent {
  export interface Props extends UIProps<"div"> {}
}
