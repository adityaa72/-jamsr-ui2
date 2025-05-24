import { useRenderElement } from "@jamsr-ui/hooks";

import type { UIProps } from "@jamsr-ui/utils";

export const DrawerBody = (props: DrawerBody.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace DrawerBody {
  export interface Props extends UIProps<"div"> {}
}
