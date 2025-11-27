import { useRenderElement } from "@jamsrui/hooks";

import { useTextFieldContext } from "./textfield-context";

import type { UIProps } from "@jamsrui/utils";

export const TextfieldRoot = (props: TextfieldRoot.Props) => {
  const ctx = useTextFieldContext();
  const renderElement = useRenderElement("div", {
    props: [props, ctx?.getRootProps({}) ?? {}],
  });
  return renderElement;
};

export namespace TextfieldRoot {
  export interface Props extends UIProps<"div"> {}
}
