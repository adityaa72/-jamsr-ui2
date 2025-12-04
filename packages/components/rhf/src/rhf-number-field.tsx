"use client";
import { NumberField } from "@jamsrui/number-field";
import { useRHFContext } from "./rhf-context";

export const RHFNumberField = (props: RHFNumberField.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <NumberField
      name={name}
      value={value}
      onValueChange={onChange}
      onBlur={onBlur}
      isInvalid={invalid}
      data-invalid={invalid}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  );
};

export namespace RHFNumberField {
  export interface Props extends NumberField.Props {}
}
