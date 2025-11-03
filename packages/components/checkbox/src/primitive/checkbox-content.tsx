import { useRenderElement } from "@jamsrui/hooks";

import { useCheckboxContext } from "./checkbox-context";

import type { UIProps } from "@jamsrui/utils";

export const CheckboxContent = (props: CheckboxContent.Props) => {
  const { getContentProps } = useCheckboxContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return renderElement;
};

export namespace CheckboxContent {
  export interface Props extends UIProps<"div"> {}
}
