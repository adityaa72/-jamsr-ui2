"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useDialogContext } from "./dialog-context";

import type { UIProps } from "@jamsrui/utils";

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
