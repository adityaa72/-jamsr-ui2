"use client";

import { useCallback } from "react";

import { MenuItem } from "./menu-item";
import { MenuItemIndicatorContext } from "./menu-item-indicator-context";
import { useMenuRadioGroupContext } from "./menu-radio-group-context";

export const MenuRadioItem = (props: MenuRadioItem.Props) => {
  const { value: itemValue, ...restProps } = props;
  const { value, isDisabled, setValue } = useMenuRadioGroupContext();

  const handleClick = useCallback(() => {
    if (!isDisabled) {
      setValue(itemValue);
    }
  }, [isDisabled, itemValue, setValue]);

  return (
    <MenuItemIndicatorContext value={{ isChecked: value === itemValue }}>
      <MenuItem preventCloseOnClick onClick={handleClick} {...restProps} />
    </MenuItemIndicatorContext>
  );
};

export namespace MenuRadioItem {
  export interface Props extends MenuItem.Props {
    value: string;
  }
}
