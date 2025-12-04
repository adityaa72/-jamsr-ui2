"use client";
import { Input } from "@jamsrui/input";
import { useRHFContext } from "./rhf-context";

export const RHFInput = (props: RHFInput.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Input
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

export namespace RHFInput {
  export interface Props extends Input.Props {}
}
