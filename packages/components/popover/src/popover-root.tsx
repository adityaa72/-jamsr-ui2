import { useRenderElement } from "@jamsrui/hooks";

import { usePopoverContext } from "./popover-context";

import type { UIProps } from "@jamsrui/utils";

export const PopoverRoot = (props: PopoverRoot.Props) => {
  const { getRootProps } = usePopoverContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps(props)],
  });
  return renderElement;
};

export namespace PopoverRoot {
  export interface Props extends UIProps<"div"> {}
}
