import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { AnimatePresence, motion } from "motion/react";

import { usePopoverContext } from "./popover-context";
import { PopoverRoot } from "./popover-root";

import type { HTMLMotionProps } from "motion/react";

export const PopoverContent = (props: PopoverContent.Props) => {
  const { children } = props;
  const {
    isOpen,
    showArrow,
    getArrowProps,
    getFloatingFocusManagerProps,
    getContentProps,
    getOverlayProps,
  } = usePopoverContext();

  return (
    <AnimatePresence>
      {!!isOpen && (
        <FloatingPortal>
          <FloatingOverlay {...getOverlayProps()}>
            <FloatingFocusManager {...getFloatingFocusManagerProps()}>
              <PopoverRoot>
                <motion.div {...getContentProps(props)}>
                  <>
                    {!!showArrow && <FloatingArrow {...getArrowProps()} />}
                    {children}
                  </>
                </motion.div>
              </PopoverRoot>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      )}
    </AnimatePresence>
  );
};

export namespace PopoverContent {
  export interface Props extends HTMLMotionProps<"div"> {}
}
