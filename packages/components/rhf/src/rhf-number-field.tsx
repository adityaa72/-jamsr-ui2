"use client";
import { NumberField } from "@jamsrui/number-field";

import { useRHFContext } from "./rhf-context";

export const RHFNumberField = (props: RHFNumberField.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <NumberField
      ref={ref}
      data-invalid={invalid}
      disabled={disabled}
      isInvalid={invalid}
      name={name}
      onBlur={onBlur}
      onValueChange={onChange}
      value={value}
      {...props}
    />
  );
};

export namespace RHFNumberField {
  export interface Props extends NumberField.Props {}
}
