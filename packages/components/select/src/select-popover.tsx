import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectPopover = (props: SelectPopover.Props) => {
  const { getPopoverProps } = useSelectContext();
  const renderElement = useRenderElement("div", {
    props: [getPopoverProps(props)],
  });
  return renderElement;
};

export namespace SelectPopover {
  export interface Props extends UIProps<"div"> {}
}
