import { useRenderElement } from "@jamsrui/hooks";

import { useContextMenuContext } from "./context-menu-context";

import type { UIProps } from "@jamsrui/utils";

export const ContextMenuItemInner = (props: ContextMenuItemInner.Props) => {
  const { getMenuItemInnerProps } = useContextMenuContext();
  const renderElement = useRenderElement("span", {
    props: [getMenuItemInnerProps(props)],
  });
  return renderElement;
};
export namespace ContextMenuItemInner {
  export interface Props extends UIProps<"span"> {}
}
