import { useRenderElement } from "@jamsrui/hooks";

import { useMenuContext } from "./menu-context";

import type { UIProps } from "@jamsrui/utils";

export const MenuGroup = (props: MenuGroup.Props) => {
  const { getMenuGroupProps } = useMenuContext();
  const renderElement = useRenderElement("div", {
    props: [getMenuGroupProps(props)],
  });
  return renderElement;
};

export namespace MenuGroup {
  export interface Props extends UIProps<"div"> {}
}
