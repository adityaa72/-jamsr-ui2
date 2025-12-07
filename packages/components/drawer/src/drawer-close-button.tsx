"use client";
import { IconButton } from "@jamsrui/icon-button";
import { CloseIcon } from "@jamsrui/icons";

import { useDrawerContext } from "./drawer-context";

export const DrawerCloseButton = (props: DrawerCloseButton.Props) => {
  const { getCloseButtonProps } = useDrawerContext();
  return (
    <IconButton label="Close Drawer" {...getCloseButtonProps(props)}>
      <CloseIcon className="size-4" />
    </IconButton>
  );
};

export namespace DrawerCloseButton {
  export interface Props extends Partial<IconButton.Props> {}
}
