import { useRenderElement } from "@jamsr-ui/hooks";

import { useDialogContext } from "./dialog-context";

import type { UIProps } from "@jamsr-ui/utils";

export const DialogBody = (props: DialogBody.Props) => {
  const { getBodyProps } = useDialogContext();
  const renderElement = useRenderElement("div", {
    props: [getBodyProps(props)],
  });
  return renderElement;
};
export namespace DialogBody {
  export interface Props extends UIProps<"div"> {}
}
