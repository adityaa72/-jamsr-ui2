import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingList,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";
import { useRenderElement } from "@jamsr-ui/hooks";

import { useMenuContext } from "./menu-context";
import { MenuFloatingContext } from "./menu-floating-context";

import type { UIProps } from "@jamsr-ui/utils";

export const MenuContent = (props: MenuContent.Props) => {
  const {
    getFloatingListProps,
    isOpen,
    getFocusManagerProps,
    getOverlayProps,
    showArrow,
    getArrowProps,
    floatingCtx,
    getContentProps,
    getRootProps,
    isNested,
  } = useMenuContext();

  const { children } = props;
  const composedChildren = (
    <>
      {!!showArrow && <FloatingArrow {...getArrowProps()} />}
      <div {...getContentProps(props)}>{children}</div>
    </>
  );
  const renderElement = useRenderElement("div", {
    props: [getRootProps(), { children: composedChildren }],
  });
  return (
    <MenuFloatingContext value={floatingCtx}>
      <FloatingList {...getFloatingListProps()}>
        {isOpen ? (
          <FloatingPortal>
            {isNested ? null : <FloatingOverlay {...getOverlayProps()} />}
            <FloatingFocusManager {...getFocusManagerProps()}>
              {renderElement}
            </FloatingFocusManager>
          </FloatingPortal>
        ) : null}
      </FloatingList>
    </MenuFloatingContext>
  );
};

export namespace MenuContent {
  export interface Props extends UIProps<"div"> {}
}
