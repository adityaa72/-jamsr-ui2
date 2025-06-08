import { useRenderElement } from "@jamsrui/hooks";

import { useDrawerContext } from "./drawer-context";

import type { UIProps } from "@jamsrui/utils";

export const DrawerHeader = (props: DrawerHeader.Props) => {
  const { getHeaderProps } = useDrawerContext();
  const renderElement = useRenderElement("div", {
    props: [getHeaderProps(props)],
  });
  return renderElement;
};

export namespace DrawerHeader {
  export interface Props extends UIProps<"div"> {}
}
