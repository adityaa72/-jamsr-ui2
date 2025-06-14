import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const RadioControl = (props: RadioControl.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace RadioControl {
  export interface Props extends UIProps<"div"> {}
}
