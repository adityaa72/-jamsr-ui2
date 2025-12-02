"use client";

import { Text } from "@jamsrui/text";

import { useAlertDialogContext } from "./alert-dialog-context";

export const AlertDialogDescription = (props: AlertDialogDescription.Props) => {
  const { getDescriptionProps } = useAlertDialogContext();
  return <Text {...getDescriptionProps(props)} />;
};

export namespace AlertDialogDescription {
  export interface Props extends Text.Props {}
}
