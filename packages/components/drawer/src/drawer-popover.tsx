import { useRenderElement } from "@jamsrui/hooks";

import { useDrawerContext } from "./drawer-context";

import type { UIProps } from "@jamsrui/utils";

export const DrawerPopover = (props: DrawerPopover.Props) => {
  const { getPopoverProps } = useDrawerContext();
  const renderElement = useRenderElement("div", {
    props: [getPopoverProps(props)],
  });
  return renderElement;
};
export namespace DrawerPopover {
  export interface Props extends UIProps<"div"> {}
}
