import { useRenderElement } from "@jamsrui/hooks";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputWrapper = (props: InputWrapper.Props) => {
  const { getWrapperProps } = useInputContext();
  const renderElement = useRenderElement("div", {
    props: [getWrapperProps(props)],
  });
  return renderElement;
};

export namespace InputWrapper {
  export interface Props extends UIProps<"div"> {}
}
