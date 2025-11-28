"use client";

import { IconButton } from "@jamsrui/icon-button";
import { CloseIcon } from "@jamsrui/icons";

import { useDialogContext } from "./dialog-context";

export const DialogCloseButton = (props: DialogCloseButton.Props) => {
  const { getCloseButtonProps } = useDialogContext();
  return (
    <IconButton label="Close Dialog" {...getCloseButtonProps(props)}>
      <CloseIcon className="size-4" />
    </IconButton>
  );
};
export namespace DialogCloseButton {
  export interface Props extends Partial<IconButton.Props> {}
}
