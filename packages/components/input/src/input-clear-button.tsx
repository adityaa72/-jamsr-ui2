import { useRenderElement } from "@jamsrui/hooks";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputClearButton = (props: InputClearButton.Props) => {
  const { getClearButtonProps } = useInputContext();
  const renderElement = useRenderElement("button", {
    props: [getClearButtonProps(props)],
  });
  return renderElement;
};

export namespace InputClearButton {
  export interface Props extends UIProps<"button"> {}
}
