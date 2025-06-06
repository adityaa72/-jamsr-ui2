import { useListItem } from "@floating-ui/react";
import { useHover, useMergeRefs, useRenderElement } from "@jamsrui/hooks";

import { useAutocompleteContext } from "./autocomplete-context";

import type { UIProps } from "@jamsrui/utils";

export const AutocompleteItem = (props: AutocompleteItem.Props) => {
  const { textValue, children, value, disabled, ...elementProps } = props;
  const {
    getAutocompleteItemProps,
    activeIndex,
    value: autocompleteValue,
  } = useAutocompleteContext();

  const listLabel =
    textValue ?? (typeof children === "string" ? children : value);
  if (!listLabel.length) {
    console.warn(`No label provided for list item with value ${value}`);
  }
  const { ref, index } = useListItem({
    label: listLabel,
  });

  const isDisabled = disabled ?? false;
  const isSelected = autocompleteValue.includes(value);
  const isActive = activeIndex === index;
  const { isHovered, ref: hoverRef } = useHover<HTMLLIElement>({
    isDisabled,
  });
  const mergedRefs = useMergeRefs([ref, hoverRef]);

  const renderElement = useRenderElement("li", {
    props: [
      getAutocompleteItemProps(elementProps),
      {
        ref: mergedRefs,
        "aria-selected": isSelected,
        "data-selected": isSelected,
        "aria-disabled": isDisabled,
        "data-disabled": isDisabled,
        "data-active": isActive,
        "data-hovered": isHovered,
        children,
      },
    ],
  });
  return renderElement;
};

export namespace AutocompleteItem {
  export interface Props extends UIProps<"li"> {
    textValue?: string;
    value: string;
    disabled?: boolean;
  }
}
