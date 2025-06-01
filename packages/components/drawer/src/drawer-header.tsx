import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const DrawerHeader = (props: DrawerHeader.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace DrawerHeader {
  export interface Props extends UIProps<"div"> {}
}
