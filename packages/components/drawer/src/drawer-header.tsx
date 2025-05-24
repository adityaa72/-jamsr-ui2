import { useRenderElement } from "@jamsr-ui/hooks";

import type { UIProps } from "@jamsr-ui/utils";

export const DrawerHeader = (props: DrawerHeader.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace DrawerHeader {
  export interface Props extends UIProps<"div"> {}
}
