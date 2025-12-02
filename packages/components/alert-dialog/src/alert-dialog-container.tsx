"use client";

import { useRenderElement } from "@jamsrui/hooks";

import type { UIProps } from "@jamsrui/utils";
import { useAlertDialogContext } from "./alert-dialog-context";
import { AnimatePresence } from "motion/react";
import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";

export const AlertDialogContainer = (props: AlertDialogContainer.Props) => {
  const { getContainerProps, getOverlayProps, getFocusManagerProps, isOpen } =
    useAlertDialogContext();
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

export namespace AlertDialogContainer {
  export interface Props extends UIProps<"div"> {}
}
