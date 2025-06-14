import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const RadioGroupLabel = (props: RadioGroupLabel.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace RadioGroupLabel {
  export interface Props extends UIProps<"div"> {}
}
