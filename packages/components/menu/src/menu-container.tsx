"use client";

import {
  FloatingFocusManager,
  FloatingList,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";
import { AnimatePresence } from "motion/react";

import { MenuContent } from ".";
import { useMenuContext } from "./menu-context";
import { MenuFloatingContext } from "./menu-floating-context";

import type { UIProps } from "@jamsrui/utils";

export const MenuContainer = (props: MenuContainer.Props) => {
  const {
    getFloatingListProps,
    isOpen,
    getFocusManagerProps,
    getOverlayProps,
    floatingCtx,
    isNested,
    getContainerProps,
  } = useMenuContext();
  const renderElement = useRenderElement("div", {
    props: [getContainerProps(props)],
  });
  return (
    <MenuFloatingContext value={floatingCtx}>
      <FloatingList {...getFloatingListProps()}>
        <AnimatePresence>
          {isOpen ? (
            <FloatingPortal>
              {isNested ? null : <FloatingOverlay {...getOverlayProps()} />}
              <FloatingFocusManager {...getFocusManagerProps()}>
                {renderElement}
              </FloatingFocusManager>
            </FloatingPortal>
          ) : null}
        </AnimatePresence>
      </FloatingList>
    </MenuFloatingContext>
  );
};

export namespace MenuContainer {
  export interface Props extends UIProps<"div"> {}
}

export const MenuContainerWithContent = (props: MenuContent.Props) => {
  return (
    <MenuContainer>
      <MenuContent {...props} />
    </MenuContainer>
  );
};
