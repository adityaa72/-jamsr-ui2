import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";

import { useDialogContext } from "./dialog-context";

import type { UIProps } from "@jamsrui/utils";

export const DialogContent = (props: DialogContent.Props) => {
  const { isOpen, getContentProps, getFocusManagerProps, getOverlayProps } =
    useDialogContext();

  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });

  return isOpen ? (
    <FloatingPortal>
      <FloatingOverlay {...getOverlayProps()}>
        <FloatingFocusManager {...getFocusManagerProps()}>
          {renderElement}
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  ) : null;
};
export namespace DialogContent {
  export interface Props extends UIProps<"div"> {}
}
