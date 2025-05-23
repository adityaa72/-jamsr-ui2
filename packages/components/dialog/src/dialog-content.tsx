import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { useRenderElement } from "@jamsr-ui/hooks";

import { useDialogContext } from "./dialog-context";

import type { UIProps } from "@jamsr-ui/utils";

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
