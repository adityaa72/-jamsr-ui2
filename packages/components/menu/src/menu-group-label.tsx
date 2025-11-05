import { useRenderElement } from "@jamsrui/hooks";

import { useMenuContext } from "./menu-context";

import type { UIProps } from "@jamsrui/utils";

export const MenuGroupLabel = (props: MenuGroupLabel.Props) => {
  const { getMenuGroupLabelProps } = useMenuContext();
  const renderElement = useRenderElement("div", {
    props: [getMenuGroupLabelProps(props)],
  });
  return renderElement;
};

export namespace MenuGroupLabel {
  export interface Props extends UIProps<"div"> {}
}
