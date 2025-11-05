import { useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";

import { MenuRadioGroupContext } from "./menu-radio-group-context";

export const MenuRadioGroup = (props: MenuRadioGroup.Props) => {
  const {
    children,
    defaultValue,
    isDisabled,
    onValueChange,
    value: valueProp,
  } = props;

  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: valueProp,
  });

  const ctxValue: MenuRadioGroupContext.Props = useMemo(
    () => ({
      isDisabled,
      value,
      setValue,
    }),
    [isDisabled, setValue, value]
  );
  return (
    <MenuRadioGroupContext value={ctxValue}>{children}</MenuRadioGroupContext>
  );
};

export namespace MenuRadioGroup {
  export interface Props {
    children?: React.ReactNode;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    isDisabled?: boolean;
  }
}
