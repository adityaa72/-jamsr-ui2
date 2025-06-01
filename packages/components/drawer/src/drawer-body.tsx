import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const DrawerBody = (props: DrawerBody.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace DrawerBody {
  export interface Props extends UIProps<"div"> {}
}
