"use client";
import { RadioGroup } from "@jamsrui/radio";

import { useRHFContext } from "./rhf-context";

export const RHFRadioGroup = (props: RHFRadioGroup.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <RadioGroup
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

export namespace RHFRadioGroup {
  export interface Props extends RadioGroup.Props {}
}
