"use client";
import {
  FloatingFocusManager,
  FloatingList,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";

import { useContextMenuContext } from "./context-menu-context";
import { ContextMenuFloatingContext } from "./context-menu-floating-context";

import type { UIProps } from "@jamsrui/utils";

export const ContextMenuContent = (props: ContextMenuContent.Props) => {
  const {
    getFloatingListProps,
    getOverlayProps,
    getFocusManagerProps,
    getRootProps,
    getContentProps,
    isOpen,
    floatingCtx,
  } = useContextMenuContext();
  const { children } = props;

  const composedChildren = (
    <>
      <div {...getContentProps(props)}>{children}</div>
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getRootProps(), { children: composedChildren }],
  });
  return (
    <ContextMenuFloatingContext value={floatingCtx}>
      <FloatingList {...getFloatingListProps()}>
        {isOpen ? (
          <FloatingPortal>
            <FloatingOverlay {...getOverlayProps()} />
            <FloatingFocusManager {...getFocusManagerProps()}>
              {renderElement}
            </FloatingFocusManager>
          </FloatingPortal>
        ) : null}
      </FloatingList>
    </ContextMenuFloatingContext>
  );
};
export namespace ContextMenuContent {
  export interface Props extends UIProps<"div"> {}
}
