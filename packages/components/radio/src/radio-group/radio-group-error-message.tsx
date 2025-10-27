import { useRenderElement } from "@jamsrui/hooks";

import { useRadioGroupContext } from "./radio-group-context";

import type { UIProps } from "@jamsrui/utils";

export const RadioGroupErrorMessage = (props: RadioGroupErrorMessage.Props) => {
  const { getErrorMessageProps } = useRadioGroupContext();
  const renderElement = useRenderElement("div", {
    props: [getErrorMessageProps(props)],
  });
  return renderElement;
};

export namespace RadioGroupErrorMessage {
  export interface Props extends UIProps<"div"> {}
}
