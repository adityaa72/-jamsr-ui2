import { useRenderElement } from "@jamsrui/hooks";

import { useCheckboxContext } from "./checkbox-context";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxDescription = (props: CheckboxDescription.Props) => {
  const { getDescriptionProps } = useCheckboxContext();
  const renderElement = useRenderElement("div", {
    props: [getDescriptionProps(props)],
  });
  return renderElement;
};

export namespace CheckboxDescription {
  export interface Props extends UIProps<"div"> {}
}
