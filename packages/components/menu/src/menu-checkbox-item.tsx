"use client";

import { useCallback } from "react";

import { useControlledState } from "@jamsrui/hooks";

import { MenuItem } from "./menu-item";
import { MenuItemIndicatorContext } from "./menu-item-indicator-context";

export const MenuCheckboxItem = (props: MenuCheckboxItem.Props) => {
  const {
    isChecked: isCheckedProp,
    onCheckedChange,
    defaultChecked,
    ...restProps
  } = props;

  const [isChecked = false, setIsChecked] = useControlledState({
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
    prop: isCheckedProp,
  });

  const handleClick = useCallback(() => {
    setIsChecked((isChecked) => !isChecked);
  }, [setIsChecked]);

  return (
    <MenuItemIndicatorContext value={{ isChecked }}>
      <MenuItem preventCloseOnClick onClick={handleClick} {...restProps} />
    </MenuItemIndicatorContext>
  );
};

export namespace MenuCheckboxItem {
  export interface Props extends MenuItem.Props {
    isChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    defaultChecked?: boolean;
  }
}
