import { useRenderElement } from "@jamsrui/hooks";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputContent = (props: InputContent.Props) => {
  const { getContentProps } = useInputContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return renderElement;
};

export namespace InputContent {
  export interface Props extends UIProps<"div"> {}
}
