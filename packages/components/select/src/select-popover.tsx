import { FloatingFocusManager, FloatingPortal } from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";
import { AnimatePresence } from "motion/react";

import { SelectContent } from "./select-content";
import { useSelectContext } from "./select-context";

import type { UIProps } from "@jamsrui/utils";

export const SelectPopover = (props: SelectPopover.Props) => {
  const { children } = props;
  const { getPopoverProps, isOpen, getFocusManagerProps } = useSelectContext();
  const composedChildren = <SelectContent>{children}</SelectContent>;
  const renderElement = useRenderElement("div", {
    props: [getPopoverProps(props), { children: composedChildren }],
  });
  return (
    <AnimatePresence>
      {isOpen ? (
        <FloatingPortal>
          <FloatingFocusManager {...getFocusManagerProps()}>
            {renderElement}
          </FloatingFocusManager>
        </FloatingPortal>
      ) : null}
    </AnimatePresence>
  );
};

export namespace SelectPopover {
  export interface Props extends UIProps<"div"> {}
}
