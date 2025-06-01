import { useRenderElement } from "@jamsrui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsrui/utils";

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
