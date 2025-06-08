import { useRenderElement } from "@jamsrui/hooks";

import { useDialogContext } from "./dialog-context";

import type { UIProps } from "@jamsrui/utils";

export const DialogPopover = (props: DialogPopover.Props) => {
  const { getPopoverProps } = useDialogContext();
  const renderElement = useRenderElement("div", {
    props: [getPopoverProps(props)],
  });
  return renderElement;
};

export namespace DialogPopover {
  export interface Props extends UIProps<"div"> {}
}
