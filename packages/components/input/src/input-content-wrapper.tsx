import { useRenderElement } from "@jamsrui/hooks";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputContentWrapper = (props: InputContentWrapper.Props) => {
  const { getContentWrapperProps } = useInputContext();
  const renderElement = useRenderElement("div", {
    props: [getContentWrapperProps(props)],
  });
  return renderElement;
};

export namespace InputContentWrapper {
  export interface Props extends UIProps<"div"> {}
}
