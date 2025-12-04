"use client";
import { Textarea } from "@jamsrui/textarea";
import { useRHFContext } from "./rhf-context";

export const RHFTextarea = (props: RHFTextarea.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Textarea
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

export namespace RHFTextarea {
  export interface Props extends Textarea.Props {}
}
