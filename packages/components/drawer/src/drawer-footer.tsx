import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const DrawerFooter = (props: DrawerFooter.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace DrawerFooter {
  export interface Props extends UIProps<"div"> {}
}
