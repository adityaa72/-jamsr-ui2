import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectErrorMessage = (props: SelectErrorMessage.Props) => {
  const { getErrorMessageProps, errorMessage } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getErrorMessageProps(props), { children: errorMessage }],
  });
  return renderElement;
};

export namespace SelectErrorMessage {
  export interface Props extends UIProps<"div"> {}
}
