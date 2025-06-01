import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectInnerWrapper = (props: SelectInnerWrapper.Props) => {
  const { getInnerWrapperProps } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getInnerWrapperProps(props)],
  });
  return renderElement;
};

export namespace SelectInnerWrapper {
  export interface Props extends UIProps<"div"> {}
}
