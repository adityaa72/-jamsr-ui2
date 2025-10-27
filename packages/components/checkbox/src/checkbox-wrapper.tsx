import { useRenderElement } from "@jamsrui/hooks";

import { useCheckboxContext } from "./checkbox-context";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxWrapper = (props: CheckboxWrapper.Props) => {
  const { getWrapperProps } = useCheckboxContext();
  const renderElement = useRenderElement("label", {
    props: [getWrapperProps(props)],
  });
  return renderElement;
};

export namespace CheckboxWrapper {
  export interface Props extends UIProps<"label"> {}
}
