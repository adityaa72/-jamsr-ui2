import { useRenderElement } from "@jamsrui/hooks";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputEndContent = (props: InputEndContent.Props) => {
  const { getEndContentProps, endContent } = useInputContext();
  const renderElement = useRenderElement("div", {
    props: [getEndContentProps(props), { children: endContent }],
  });
  if (!endContent) return null;
  return renderElement;
};

export namespace InputEndContent {
  export interface Props extends UIProps<"div"> {}
}
