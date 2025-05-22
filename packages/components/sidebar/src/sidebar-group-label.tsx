import { useRenderElement } from "@jamsr-ui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsr-ui/utils";

export const SidebarGroupLabel = (props: SidebarGroupLabel.Props) => {
  const { getGroupLabelProps } = useSidebarContext();
  const renderElement = useRenderElement("div", {
    props: [getGroupLabelProps(props)],
  });
  return renderElement;
};

export namespace SidebarGroupLabel {
  export interface Props extends UIProps<"div"> {}
}
