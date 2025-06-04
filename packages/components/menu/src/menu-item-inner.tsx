import { useRenderElement } from "@jamsrui/hooks";

import { useMenuContext } from "./menu-context";

import type { UIProps } from "@jamsrui/utils";

export const MenuItemInner = (props: MenuItemInner.Props) => {
  const { getMenuItemInnerProps } = useMenuContext();
  const renderElement = useRenderElement("span", {
    props: [getMenuItemInnerProps(props)],
  });
  return renderElement;
};

export namespace MenuItemInner {
  export interface Props extends UIProps<"span"> {}
}
