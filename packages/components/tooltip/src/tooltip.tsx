import { useMemo } from "react";

import { FloatingArrow, FloatingPortal } from "@floating-ui/react";
import { useRenderElement } from "@jamsr-ui/hooks";

import { useTooltip } from "./use-tooltip";

export const Tooltip = (props: Tooltip.Props) => {
  const { children, getArrowProps, getRootProps, isOpen, title, showArrow } =
    useTooltip(props);

  const composedChildren = useMemo(() => {
    return (
      <>
        {!!showArrow && <FloatingArrow {...getArrowProps()} />}
        {title}
      </>
    );
  }, [getArrowProps, showArrow, title]);

  const renderElement = useRenderElement("div", {
    props: [
      getRootProps({}),
      {
        children: composedChildren,
      },
    ],
  });

  return (
    <>
      {children}
      {!!isOpen && <FloatingPortal>{renderElement}</FloatingPortal>}
    </>
  );
};

export namespace Tooltip {
  export interface Props extends useTooltip.Props {}
}
