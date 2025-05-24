import { FloatingOverlay } from "@floating-ui/react";

import { useDrawerContext } from "./drawer-context";
import { DrawerFocusManager } from "./drawer-focus-manager";

import type { FloatingOverlayProps } from "@floating-ui/react";
import type { HTMLAttributes } from "react";

export const DrawerBackdrop = (props: DrawerBackdrop.Props) => {
  const { children } = props;
  const { getBackdropProps } = useDrawerContext();
  return (
    <FloatingOverlay {...getBackdropProps(props)}>
      <DrawerFocusManager>{children}</DrawerFocusManager>
    </FloatingOverlay>
  );
};

export namespace DrawerBackdrop {
  export interface Props
    extends HTMLAttributes<HTMLDivElement>,
      FloatingOverlayProps {
    children: React.ReactElement;
  }
}
