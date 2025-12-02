"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useAlertDialogContext } from "./alert-dialog-context";

import type { UIProps } from "@jamsrui/utils";

export const AlertDialogBody = (props: AlertDialogBody.Props) => {
  const { getBodyProps } = useAlertDialogContext();
  const renderElement = useRenderElement("div", {
    props: [getBodyProps(props)],
  });
  return renderElement;
};

export namespace AlertDialogBody {
  export interface Props extends UIProps<"div"> {}
}
