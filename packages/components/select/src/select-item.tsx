"use client";

import { useListItem } from "@floating-ui/react";
import { useRenderElement } from "@jamsrui/hooks";

import { useSelectContext } from "./select-context";

import { dataAttr, type UIProps } from "@jamsrui/utils";
import { SelectItemContext } from "./select-item-context";

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
    label: textValue,
  });

  const isActive = activeIndex === index;
  const isSelected = selectValue.includes(value);

  const handleClick = () => {
    onSelectValue(value);
    handleSelect(index);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const renderElement = useRenderElement("button", {
    props: [
      getSelectItemProps(restProps),
      {
        ref,
      },
      {
        role: "option",
        "aria-selected": dataAttr(isSelected),
        "data-selected": dataAttr(isSelected),
        "aria-disabled": dataAttr(isDisabled),
        "data-disabled": dataAttr(isDisabled),
        "data-active": dataAttr(isActive),
        disabled: isDisabled,
        tabIndex: isActive ? 0 : -1,
      },
      getItemProps({
        onClick: handleClick,
        onKeyDown: handleOnKeyDown,
      }) as any,
    ],
  });
  return (
    <SelectItemContext value={{ isSelected }}>
      {renderElement}
    </SelectItemContext>
  );
};

export namespace SelectItem {
  export interface Props extends UIProps<"button"> {
    textValue: string;
    value: string;
    disabled?: boolean;
  }
}
