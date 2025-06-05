import { useRenderElement } from "@jamsrui/hooks";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputHelperText = (props: InputHelperText.Props) => {
  const { getHelperTextProps, helperText } = useInputContext();
  const renderElement = useRenderElement("span", {
    props: [getHelperTextProps(props), { children: helperText }],
  });
  if (!helperText) return null;
  return renderElement;
};

export namespace InputHelperText {
  export interface Props extends UIProps<"span"> {}
}
