import { useRenderElement } from "@jamsrui/hooks";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputErrorMessage = (props: InputErrorMessage.Props) => {
  const { getErrorMessageProps, errorMessage } = useInputContext();
  const renderElement = useRenderElement("span", {
    props: [getErrorMessageProps(props), { children: errorMessage }],
  });
  if (!errorMessage) return null;
  return renderElement;
};

export namespace InputErrorMessage {
  export interface Props extends UIProps<"span"> {}
}
