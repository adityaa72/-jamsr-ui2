"use client";
import { OtpInput } from "@jamsrui/otp-input";
import { useRHFContext } from "./rhf-context";

export const RHFOtpInput = (props: RHFOtpInput.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <OtpInput
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

export namespace RHFOtpInput {
  export interface Props extends OtpInput.Props {}
}
