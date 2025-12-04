"use client";
import { Switch } from "@jamsrui/switch";
import { useRHFContext } from "./rhf-context";

export const RHFSwitch = (props: RHFSwitch.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Switch
      name={name}
      checked={value}
      onCheckedChange={onChange}
      onBlur={onBlur}
      isInvalid={invalid}
      data-invalid={invalid}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  );
};

export namespace RHFSwitch {
  export interface Props extends Switch.Props {}
}
