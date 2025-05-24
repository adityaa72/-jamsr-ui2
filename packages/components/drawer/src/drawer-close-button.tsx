import { useRenderElement } from "@jamsr-ui/hooks";

import type { UIProps } from "@jamsr-ui/utils";

export const DrawerCloseButton = (props: DrawerCloseButton.Props) => {
  const renderElement = useRenderElement("button", {
    props,
  });
  return renderElement;
};

export namespace DrawerCloseButton {
  export interface Props extends UIProps<"button"> {}
}
