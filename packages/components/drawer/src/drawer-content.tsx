import { FloatingPortal } from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";

import { DrawerBackdrop } from "./drawer-backdrop";
import { useDrawerContext } from "./drawer-context";

import type { UIProps } from "@jamsrui/utils";

export const DrawerContent = (props: DrawerContent.Props) => {
  const { getContentProps, isOpen } = useDrawerContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return isOpen ? (
    <FloatingPortal>
      <DrawerBackdrop>{renderElement}</DrawerBackdrop>
    </FloatingPortal>
  ) : null;
};

export namespace DrawerContent {
  export interface Props extends UIProps<"div"> {}
}
