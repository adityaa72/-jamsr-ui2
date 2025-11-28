"use client";

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { AnimatePresence } from "motion/react";

import { useRenderElement } from "@jamsrui/hooks";
import { UIProps } from "@jamsrui/utils";
import { usePopoverContext } from "./popover-context";
import { PopoverDialog } from "./popover-dialog";

export const PopoverContent = (props: PopoverContent.Props) => {
  const {
    isOpen,
    getFloatingFocusManagerProps,
    getContentProps,
    getOverlayProps,
    getAnimatePresenceProps,
  } = usePopoverContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return (
    <AnimatePresence {...getAnimatePresenceProps()}>
      {!!isOpen && (
        <FloatingPortal>
          <FloatingOverlay {...getOverlayProps()} />
          <FloatingFocusManager {...getFloatingFocusManagerProps()}>
            {renderElement}
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </AnimatePresence>
  );
};

export const PopoverContentWithDialog = (props: PopoverDialog.Props) => {
  return (
    <PopoverContent>
      <PopoverDialog {...props} />
    </PopoverContent>
  );
};

export namespace PopoverContent {
  export interface Props extends UIProps<"div"> {}
}
