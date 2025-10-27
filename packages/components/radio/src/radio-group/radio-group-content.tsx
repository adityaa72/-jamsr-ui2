import { useRenderElement } from "@jamsrui/hooks";

import { useRadioGroupContext } from "./radio-group-context";

import type { UIProps } from "@jamsrui/utils";

export const RadioGroupContent = (props: RadioGroupContent.Props) => {
  const { getContentProps, children } = useRadioGroupContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props), { children }],
  });
  return renderElement;
};

export namespace RadioGroupContent {
  export interface Props extends UIProps<"div"> {}
}
