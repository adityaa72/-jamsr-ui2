import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const Checkbox = (props: Checkbox.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace Checkbox {
  export interface Props extends UIProps<"div"> {}
}
