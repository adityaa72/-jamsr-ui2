import { useRenderElement } from "@jamsr-ui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsr-ui/utils";

export const SidebarHeader = (props: SidebarHeader.Props) => {
  const { getHeaderProps } = useSidebarContext();
  const renderElement = useRenderElement("div", {
    props: [getHeaderProps(props)],
  });
  return renderElement;
};

export namespace SidebarHeader {
  export interface Props extends UIProps<"div"> {}
}
