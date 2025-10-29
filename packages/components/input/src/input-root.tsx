import { useRenderElement } from "@jamsrui/hooks";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputRoot = (props: InputRoot.Props) => {
  const { getRootProps } = useInputContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps(props)],
  });
  return renderElement;
};

export namespace InputRoot {
  export interface Props extends UIProps<"div"> {}
}
