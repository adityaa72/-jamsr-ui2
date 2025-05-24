import { useRenderElement } from "@jamsr-ui/hooks";

import type { UIProps } from "@jamsr-ui/utils";

export const DrawerFooter = (props: DrawerFooter.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace DrawerFooter {
  export interface Props extends UIProps<"div"> {}
}
