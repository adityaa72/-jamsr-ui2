import { useRenderElement } from "@jamsrui/hooks";

import { useSidebarContext } from "./sidebar-context";
import { useSidebarState } from "./sidebar-provider";

import type { UIProps } from "@jamsrui/utils";

export const SidebarBackdrop = (props: SidebarBackdrop.Props) => {
  const { isMobile, isOpen } = useSidebarState();
  const { getBackdropProps } = useSidebarContext();
  const renderElement = useRenderElement("div", {
    props: [getBackdropProps(props)],
  });
  if (!isMobile || !isOpen) return null;
  return renderElement;
};

export namespace SidebarBackdrop {
  export interface Props extends UIProps<"div"> {}
}
