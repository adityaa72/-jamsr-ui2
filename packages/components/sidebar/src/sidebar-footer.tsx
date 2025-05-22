import { useRenderElement } from "@jamsr-ui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsr-ui/utils";

export const SidebarFooter = (props: SidebarFooter.Props) => {
  const { getFooterProps } = useSidebarContext();
  const renderElement = useRenderElement("div", {
    props: [getFooterProps(props)],
  });
  return renderElement;
};

export namespace SidebarFooter {
  export interface Props extends UIProps<"div"> {}
}
