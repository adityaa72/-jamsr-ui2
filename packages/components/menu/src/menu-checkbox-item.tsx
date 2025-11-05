import { useCallback } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { CheckIcon } from "@jamsrui/icons";

import { MenuItem } from "./menu-item";

const MenuCheckboxIndicator = (props: { isChecked: boolean }) => {
  const { isChecked } = props;
  return <span className="size-4">{isChecked ? <CheckIcon /> : null}</span>;
};

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
    <MenuItem
      preventCloseOnClick
      onClick={handleClick}
      startContent={<MenuCheckboxIndicator isChecked={isChecked} />}
      {...restProps}
    />
  );
};

export namespace MenuCheckboxItem {
  export interface Props extends MenuItem.Props {
    isChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    defaultChecked?: boolean;
  }
}
