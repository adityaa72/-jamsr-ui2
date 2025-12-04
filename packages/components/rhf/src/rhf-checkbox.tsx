"use client";
import { Checkbox } from "@jamsrui/checkbox";
import { useRHFContext } from "./rhf-context";

export const RHFCheckbox = (props: RHFCheckbox.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Checkbox
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

export namespace RHFCheckbox {
  export interface Props extends Checkbox.Props {}
}
