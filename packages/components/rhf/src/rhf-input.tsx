"use client";
import { Input } from "@jamsrui/input";

import { useRHFContext } from "./rhf-context";

export const RHFInput = (props: RHFInput.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Input
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

export namespace RHFInput {
  export interface Props extends Input.Props {}
}
