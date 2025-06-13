import { useRenderElement } from "@jamsrui/hooks";

import { useCheckboxContext } from "./checkbox-context";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxErrorMessage = (props: CheckboxErrorMessage.Props) => {
  const { getErrorMessageProps } = useCheckboxContext();
  const renderElement = useRenderElement("span", {
    props: [getErrorMessageProps(props)],
  });
  return renderElement;
};

export namespace CheckboxErrorMessage {
  export interface Props extends UIProps<"span"> {}
}
