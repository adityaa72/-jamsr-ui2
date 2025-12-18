"use client";
import { Select } from "@jamsrui/select";

import { useRHFContext } from "./rhf-context";

export const RHFSelect = (props: RHFSelect.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Select
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

export namespace RHFSelect {
  export interface Props extends Select.Props {}
}
