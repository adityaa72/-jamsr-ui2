import { FloatingPortal } from "@floating-ui/react";
import { useRenderElement } from "@jamsr-ui/hooks";

import { DrawerBackdrop } from "./drawer-backdrop";
import { useDrawerContext } from "./drawer-context";

import type { UIProps } from "@jamsr-ui/utils";

export const DrawerContent = (props: DrawerContent.Props) => {
  const { children } = props;
  const { getContentProps, isOpen } = useDrawerContext();
  const composedChildren = isOpen ? (
    <FloatingPortal>
      <DrawerBackdrop>{children}</DrawerBackdrop>
    </FloatingPortal>
  ) : null;
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props), { children: composedChildren }],
  });
  return renderElement;
};

export namespace DrawerContent {
  export interface Props extends UIProps<"div"> {
    children: React.ReactElement;
  }
}
