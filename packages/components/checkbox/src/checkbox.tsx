import { useRenderElement } from "@jamsr-ui/hooks";

import type { UIProps } from "@jamsr-ui/utils";

export const Checkbox = (props: Checkbox.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace Checkbox {
  export interface Props extends UIProps<"div"> {}
}
