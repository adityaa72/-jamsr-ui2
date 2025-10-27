import { useRenderElement } from "@jamsrui/hooks";

import { useRadioGroupContext } from "./radio-group-context";

import type { UIProps } from "@jamsrui/utils";

export const RadioGroupDescription = (props: RadioGroupDescription.Props) => {
  const { getDescriptionProps } = useRadioGroupContext();
  const renderElement = useRenderElement("div", {
    props: [getDescriptionProps(props)],
  });
  return renderElement;
};

export namespace RadioGroupDescription {
  export interface Props extends UIProps<"div"> {}
}
