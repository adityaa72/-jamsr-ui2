import { useRenderElement } from "@jamsrui/hooks";

import { useCheckboxContext } from "./checkbox-context";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxRoot = (prop: CheckboxRoot.Props) => {
  const { getRootProps } = useCheckboxContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps(prop)],
  });
  return renderElement;
};

export namespace CheckboxRoot {
  export interface Props extends UIProps<"input"> {}
}
