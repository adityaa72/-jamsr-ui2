"use client";
import { Switch } from "@jamsrui/switch";

import { useRHFContext } from "./rhf-context";

export const RHFSwitch = (props: RHFSwitch.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Switch
      ref={ref}
      checked={value}
      data-invalid={invalid}
      disabled={disabled}
      isInvalid={invalid}
      name={name}
      onBlur={onBlur}
      onCheckedChange={onChange}
      {...props}
    />
  );
};

export namespace RHFSwitch {
  export interface Props extends Switch.Props {}
}
