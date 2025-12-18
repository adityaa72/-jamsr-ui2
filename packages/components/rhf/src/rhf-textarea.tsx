"use client";
import { Textarea } from "@jamsrui/textarea";

import { useRHFContext } from "./rhf-context";

export const RHFTextarea = (props: RHFTextarea.Props) => {
  const { field, fieldState } = useRHFContext();
  const { value, onChange, onBlur, name, ref, disabled } = field;
  const { invalid } = fieldState;
  return (
    <Textarea
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

export namespace RHFTextarea {
  export interface Props extends Textarea.Props {}
}
