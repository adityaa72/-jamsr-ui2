import { FloatingOverlay, FloatingPortal } from "@floating-ui/react";
import { AnimatePresence, motion } from "motion/react";

import { DrawerCloseButton } from "./drawer-close-button";
import { useDrawerContext } from "./drawer-context";
import { DrawerPopover } from "./drawer-popover";

import type { HTMLMotionProps } from "motion/react";

export const DrawerContent = (props: DrawerContent.Props) => {
  const { children } = props;
  const { getContentProps, isOpen, getBackdropProps, hideCloseButton } =
    useDrawerContext();
  return (
    <AnimatePresence>
      {isOpen ? (
        <FloatingPortal>
          <FloatingOverlay {...getBackdropProps()}>
            <DrawerPopover>
              <motion.div {...getContentProps(props)}>
                {!hideCloseButton && <DrawerCloseButton />}
                {children}
              </motion.div>
            </DrawerPopover>
          </FloatingOverlay>
        </FloatingPortal>
      ) : null}
    </AnimatePresence>
  );
};

export namespace DrawerContent {
  export interface Props extends Omit<HTMLMotionProps<"div">, "children"> {
    children: React.ReactNode;
  }
}
