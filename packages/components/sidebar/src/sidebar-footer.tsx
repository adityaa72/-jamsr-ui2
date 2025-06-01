import { useRenderElement } from "@jamsrui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsrui/utils";

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
