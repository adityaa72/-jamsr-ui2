"use client";

import { Text } from "@jamsrui/text";

import { useAlertDialogContext } from "./alert-dialog-context";

export const AlertDialogTitle = (props: AlertDialogTitle.Props) => {
  const { getTitleProps } = useAlertDialogContext();
  return <Text {...getTitleProps(props)} />;
};

export namespace AlertDialogTitle {
  export interface Props extends Text.Props {}
}
