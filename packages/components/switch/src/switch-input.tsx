"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useSwitchContext } from "./switch-context";

import { useFieldA11yContext } from "@jamsrui/context";
import type { UIProps } from "@jamsrui/utils";

export const SwitchInput = (props: SwitchInput.Props) => {
  const { getInputProps } = useSwitchContext();
  const fieldA11yContext = useFieldA11yContext();
  const renderElement = useRenderElement("input", {
    props: [getInputProps(props), fieldA11yContext?.getInputProps() ?? {}],
  });
  return renderElement;
};

export namespace SwitchInput {
  export interface Props extends UIProps<"input"> {}
}
