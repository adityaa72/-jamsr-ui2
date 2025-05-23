import { useRenderElement } from "@jamsr-ui/hooks";

import { useDialogContext } from "./dialog-context";

import type { UIProps } from "@jamsr-ui/utils";

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
