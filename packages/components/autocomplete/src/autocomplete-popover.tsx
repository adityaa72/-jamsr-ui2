"use client";
import { FloatingFocusManager, FloatingPortal } from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";

import { useAutocompleteContext } from "./autocomplete-context";

import type { UIProps } from "@jamsrui/utils";

export const AutocompletePopover = (props: AutocompletePopover.Props) => {
  const { getPopoverProps, isOpen, getFocusManagerProps } =
    useAutocompleteContext();
  const renderElement = useRenderElement("button", {
    props: [getPopoverProps(props)],
  });
  return isOpen ? (
    <FloatingPortal>
      <FloatingFocusManager {...getFocusManagerProps()}>
        {renderElement}
      </FloatingFocusManager>
    </FloatingPortal>
  ) : null;
};

export namespace AutocompletePopover {
  export interface Props extends UIProps<"button"> {}
}
