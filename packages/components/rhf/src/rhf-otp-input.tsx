"use client";
import { OtpInput } from "@jamsrui/otp-input";

import { useRHFContext } from "./rhf-context";

export const RHFOtpInput = (props: RHFOtpInput.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <OtpInput
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

export namespace RHFOtpInput {
  export interface Props extends OtpInput.Props {}
}
