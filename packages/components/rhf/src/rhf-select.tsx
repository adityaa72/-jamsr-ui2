"use client";
import { Select } from "@jamsrui/select";
import { useRHFContext } from "./rhf-context";

export const RHFSelect = (props: RHFSelect.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Select
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

export namespace RHFSelect {
  export interface Props extends Select.Props {}
}
