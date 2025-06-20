import { useRenderElement } from "@jamsrui/hooks";

import { useSidebarContext } from "./sidebar-context";

import type { UIProps } from "@jamsrui/utils";

export const SidebarBody = (props: SidebarBody.Props) => {
  const { getBodyProps } = useSidebarContext();
  const renderElement = useRenderElement("div", {
    props: [getBodyProps(props)],
  });
  return renderElement;
};

export namespace SidebarBody {
  export interface Props extends UIProps<"div"> {}
}
