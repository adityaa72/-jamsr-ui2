import { useCallback } from "react";

import { CheckIcon } from "@jamsrui/icons";

import { MenuItem } from "./menu-item";
import { useMenuRadioGroupContext } from "./menu-radio-group-context";

const MenuRadioIndicator = (props: { isChecked: boolean }) => {
  const { isChecked } = props;
  return <span className="size-4">{isChecked ? <CheckIcon /> : null}</span>;
};

export const MenuRadioItem = (props: MenuRadioItem.Props) => {
  const { value: itemValue, tickPlacement, ...restProps } = props;
  const { value, isDisabled, setValue } = useMenuRadioGroupContext();

  const handleClick = useCallback(() => {
    if (!isDisabled) {
      setValue(itemValue);
    }
  }, [isDisabled, itemValue, setValue]);

  return (
    <MenuItem
      preventCloseOnClick
      onClick={handleClick}
      endContent={
        tickPlacement === "end" ? (
          <MenuRadioIndicator isChecked={value === itemValue} />
        ) : undefined
      }
      startContent={
        tickPlacement === "start" ? (
          <MenuRadioIndicator isChecked={value === itemValue} />
        ) : undefined
      }
      {...restProps}
    />
  );
};

export namespace MenuRadioItem {
  export interface Props extends MenuItem.Props {
    value: string;
    tickPlacement?: "start" | "end";
  }
}
