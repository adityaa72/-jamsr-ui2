import { useRenderElement } from "@jamsrui/hooks";

import { useDialogContext } from "./dialog-context";

import type { UIProps } from "@jamsrui/utils";

export const DialogHeader = (props: DialogHeader.Props) => {
  const { getHeaderProps } = useDialogContext();
  const renderElement = useRenderElement("div", {
    props: [getHeaderProps(props)],
  });
  return renderElement;
};
export namespace DialogHeader {
  export interface Props extends UIProps<"div"> {}
}
