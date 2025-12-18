"use client";

import { FieldError } from "@jamsrui/field-error";

import { useRHFContext } from "./rhf-context";

export const RHFFieldError = (props: RHFFieldError.Props) => {
  const { fieldState } = useRHFContext();
  const { error } = fieldState;
  if (!error) return null;
  return <FieldError {...props}>{error?.message}</FieldError>;
};

export namespace RHFFieldError {
  export interface Props extends FieldError.Props {}
}
