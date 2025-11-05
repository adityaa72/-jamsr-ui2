import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingList,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { AnimatePresence } from "motion/react";

import { MenuContent2 } from "./menu-content2";
import { useMenuContext } from "./menu-context";
import { MenuFloatingContext } from "./menu-floating-context";
import { MenuRoot } from "./menu-root";

import type { UIProps } from "@jamsrui/utils";

export const MenuContent = (props: MenuContent.Props) => {
  const {
    getFloatingListProps,
    isOpen,
    getFocusManagerProps,
    getOverlayProps,
    hideArrow,
    getArrowProps,
    floatingCtx,
    isNested,
  } = useMenuContext();

  const { children } = props;

  return (
    <MenuFloatingContext value={floatingCtx}>
      <FloatingList {...getFloatingListProps()}>
        <AnimatePresence>
          {isOpen ? (
            <FloatingPortal>
              {isNested ? null : <FloatingOverlay {...getOverlayProps()} />}
              <FloatingFocusManager {...getFocusManagerProps()}>
                <MenuRoot>
                  <MenuContent2>
                    {hideArrow ? null : <FloatingArrow {...getArrowProps()} />}
                    {children}
                  </MenuContent2>
                </MenuRoot>
              </FloatingFocusManager>
            </FloatingPortal>
          ) : null}
        </AnimatePresence>
      </FloatingList>
    </MenuFloatingContext>
  );
};

export namespace MenuContent {
  export interface Props extends UIProps<"div"> {}
}
