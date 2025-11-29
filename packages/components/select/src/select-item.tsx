"use client";

import { useListItem } from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import { dataAttr, type UIProps } from "@jamsrui/utils";
import { SelectItemContext } from "./select-item-context";
import { useCallback } from "react";

export const SelectItem = (props: SelectItem.Props) => {
  const { textValue, value, disabled, ...restProps } = props;
  const {
    getSelectItemProps,
    value: selectValue,
    activeIndex,
    getItemProps,
    handleSelect,
    onSelectValue,
  } = useSelectContext();
  const isDisabled = disabled;

  const { ref, index } = useListItem({
    label: isDisabled ? null : textValue,
  });

  const isActive = activeIndex === index;
  const isSelected = selectValue.includes(value);

  const handleClick = useCallback(() => {
    onSelectValue(value);
    handleSelect(index);
  }, []);

  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  const renderElement = useRenderElement("div", {
    props: [
      getSelectItemProps(restProps),
      {
        role: "option",
        "aria-selected": dataAttr(isSelected),
        "data-selected": dataAttr(isSelected),
        "aria-disabled": dataAttr(isDisabled),
        "data-disabled": dataAttr(isDisabled),
        "data-active": dataAttr(isActive),
        tabIndex: isActive ? 0 : -1,
      },
      isDisabled
        ? {}
        : (getItemProps({
            onClick: handleClick,
            onKeyDown: handleOnKeyDown,
          }) as any),
      {
        ref,
      },
    ],
  });
  return (
    <SelectItemContext value={{ isSelected }}>
      {renderElement}
    </SelectItemContext>
  );
};

export namespace SelectItem {
  export interface Props extends UIProps<"div"> {
    textValue: string;
    value: string;
    disabled?: boolean;
  }
}
