import { useRenderElement } from "@jamsrui/hooks";

import { useDialogContext } from "./dialog-context";

import type { UIProps } from "@jamsrui/utils";

export const DialogFooter = (props: DialogFooter.Props) => {
  const { getFooterProps } = useDialogContext();
  const renderElement = useRenderElement("div", {
    props: [getFooterProps(props)],
  });
  return renderElement;
};
export namespace DialogFooter {
  export interface Props extends UIProps<"div"> {}
}
