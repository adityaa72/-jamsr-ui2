"use client";

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";
import { AnimatePresence } from "motion/react";

import { DialogContent } from "./dialog-content";
import { useDialogContext } from "./dialog-context";

import type { UIProps } from "@jamsrui/utils";

export const DialogContainer = (props: DialogContainer.Props) => {
  const { isOpen, getFocusManagerProps, getOverlayProps, getContainerProps } =
    useDialogContext();
  const renderElement = useRenderElement("div", {
    props: [getContainerProps(props)],
  });

  return (
    <AnimatePresence>
      {isOpen ? (
        <FloatingPortal>
          <FloatingOverlay {...getOverlayProps()}>
            <FloatingFocusManager {...getFocusManagerProps()}>
              {renderElement}
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      ) : null}
    </AnimatePresence>
  );
};
export namespace DialogContainer {
  export interface Props extends UIProps<"div"> {}
}

export const DialogContainerWithContent = (
  props: DialogContainerWithContent.Props
) => {
  return (
    <DialogContainer>
      <DialogContent {...props} />
    </DialogContainer>
  );
};

export namespace DialogContainerWithContent {
  export interface Props extends DialogContent.Props {}
}
