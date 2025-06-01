import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";

export const SwitchErrorMessage = (props: SwitchErrorMessage.Props) => {
  const { getErrorMessageProps, errorMessage } = useSwitchContext();
  const renderElement = useRenderElement("span", {
    props: [getErrorMessageProps(props), { children: errorMessage }],
  });
  return renderElement;
};

export namespace SwitchErrorMessage {
  export interface Props extends UIProps<"span"> {}
}
