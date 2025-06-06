import { useRenderElement } from "@jamsrui/hooks";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputStartContent = (props: InputStartContent.Props) => {
  const { getStartContentProps, startContent } = useInputContext();
  const renderElement = useRenderElement("div", {
    props: [getStartContentProps(props), { children: startContent }],
  });
  if (!startContent) return null;
  return renderElement;
};

export namespace InputStartContent {
  export interface Props extends UIProps<"div"> {}
}
