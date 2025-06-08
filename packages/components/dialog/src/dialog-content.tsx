import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { AnimatePresence, motion } from "motion/react";

import { useDialogContext } from "./dialog-context";
import { DialogPopover } from "./dialog-popover";

import type { HTMLMotionProps } from "motion/react";
import { DialogCloseButton } from "./dialog-close-button";

export const DialogContent = (props: DialogContent.Props) => {
  const { children } = props;
  const {
    isOpen,
    getContentProps,
    getFocusManagerProps,
    getOverlayProps,
    hideCloseButton,
  } = useDialogContext();

  return (
    <AnimatePresence>
      {isOpen ? (
        <FloatingPortal>
          <FloatingOverlay {...getOverlayProps()} />
          <FloatingFocusManager {...getFocusManagerProps()}>
            <DialogPopover>
              <motion.div {...getContentProps(props)}>
                {!hideCloseButton && <DialogCloseButton />}
                {children}
              </motion.div>
            </DialogPopover>
          </FloatingFocusManager>
        </FloatingPortal>
      ) : null}
    </AnimatePresence>
  );
};
export namespace DialogContent {
  export interface Props extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
  }
}
