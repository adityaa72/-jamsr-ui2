"use client";

import { IconButtonContext } from "./icon-button-context";
import { IconButtonRoot } from "./icon-button-root";
import { useIconButton } from "./use-icon-button";

export const IconButton = (props: IconButton.Props) => {
  const { children } = props;
  const ctx = useIconButton(props);
  return (
    <IconButtonContext value={ctx}>
      <IconButtonRoot>{children}</IconButtonRoot>
    </IconButtonContext>
  );
};

export namespace IconButton {
  export interface Props extends useIconButton.Props {}
}
