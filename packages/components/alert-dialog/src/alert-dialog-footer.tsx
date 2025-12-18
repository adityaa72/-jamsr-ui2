"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useAlertDialogContext } from "./alert-dialog-context";

import type { UIProps } from "@jamsrui/utils";

export const AlertDialogFooter = (props: AlertDialogFooter.Props) => {
  const { getFooterProps } = useAlertDialogContext();
  const renderElement = useRenderElement("div", {
    props: [getFooterProps(props)],
  });
  return renderElement;
};

export namespace AlertDialogFooter {
  export interface Props extends UIProps<"div"> {}
}
