import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectMainWrapper = (props: SelectMainWrapper.Props) => {
  const { getMainWrapperProps } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getMainWrapperProps(props)],
  });
  return renderElement;
};

export namespace SelectMainWrapper {
  export interface Props extends UIProps<"div"> {}
}
