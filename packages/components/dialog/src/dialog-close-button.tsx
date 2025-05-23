import { useRenderElement } from "@jamsr-ui/hooks";

import { useDialogContext } from "./dialog-context";

import type { UIProps } from "@jamsr-ui/utils";

export const DialogCloseButton = (props: DialogCloseButton.Props) => {
  const { getCloseButtonProps } = useDialogContext();
  const renderElement = useRenderElement("button", {
    props: [getCloseButtonProps(props)],
  });
  return renderElement;
};
export namespace DialogCloseButton {
  export interface Props extends UIProps<"button"> {}
}
