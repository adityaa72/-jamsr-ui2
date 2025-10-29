import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import type { UIProps } from "@jamsrui/utils";

export const SwitchInput = (props: SwitchInput.Props) => {
  const { getInputProps } = useSwitchContext();
  const renderElement = useRenderElement("input", {
    props: [getInputProps(props)],
  });
  return renderElement;
};

export namespace SwitchInput {
  export interface Props extends UIProps<"input"> {}
}
