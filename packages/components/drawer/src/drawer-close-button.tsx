import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const DrawerCloseButton = (props: DrawerCloseButton.Props) => {
  const renderElement = useRenderElement("button", {
    props,
  });
  return renderElement;
};

export namespace DrawerCloseButton {
  export interface Props extends UIProps<"button"> {}
}
