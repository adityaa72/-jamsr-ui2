import { useRenderElement } from "@jamsrui/hooks";

import { useMenuContext } from "./menu-context";

import type { UIProps } from "@jamsrui/utils";

export const MenuRoot = (props: MenuRoot.Props) => {
  const { getRootProps } = useMenuContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps(props)],
  });
  return renderElement;
};

export namespace MenuRoot {
  export interface Props extends UIProps<"div"> {}
}
