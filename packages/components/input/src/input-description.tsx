import { useRenderElement } from "@jamsrui/hooks";

import { useInputContext } from "./input-context";

import type { UIProps } from "@jamsrui/utils";

export const InputDescription = (props: InputDescription.Props) => {
  const { getDescriptionProps, helperText } = useInputContext();
  const renderElement = useRenderElement("span", {
    props: [getDescriptionProps(props), { children: helperText }],
  });
  if (!helperText) return null;
  return renderElement;
};

export namespace InputDescription {
  export interface Props extends UIProps<"span"> {}
}
