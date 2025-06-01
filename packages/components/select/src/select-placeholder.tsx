import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectPlaceholder = (props: SelectPlaceholder.Props) => {
  const { getPlaceholderProps } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getPlaceholderProps(props)],
  });
  return renderElement;
};

export namespace SelectPlaceholder {
  export interface Props extends UIProps<"div"> {}
}
