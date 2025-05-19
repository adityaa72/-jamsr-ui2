import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from "@floating-ui/react";

import { usePopoverContext } from "./popover-context";

export const PopoverContent = (props: PopoverContent.Props) => {
  const { children } = props;
  const {
    isOpen,
    getRootProps,
    showArrow,
    getArrowProps,
    getFloatingFocusManagerProps,
  } = usePopoverContext();

  return (
    isOpen && (
      <FloatingPortal>
        <FloatingOverlay>
          <FloatingFocusManager {...getFloatingFocusManagerProps()}>
            <div {...getRootProps({})}>
              {!!showArrow && <FloatingArrow {...getArrowProps()} />}
              {children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    )
  );
};

export namespace PopoverContent {
  export interface Props {
    children: React.ReactNode;
  }
}
