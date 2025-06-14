import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";

export const RadioGroupContent = (props: RadioGroupContent.Props) => {
  const renderElement = useRenderElement("div", {
    props,
  });
  return renderElement;
};

export namespace RadioGroupContent {
  export interface Props extends UIProps<"div"> {}
}
