"use client";

import { Controller, useFormContext } from "react-hook-form";

import { RHFContext } from "./rhf-context";

import type { FieldValues, Path } from "react-hook-form";

export const RHFField = <T extends FieldValues>(props: {
  name: Path<T>;
  children: React.ReactNode;
}) => {
  const { name, children } = props;
  const { control } = useFormContext<T>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState, formState }) => {
        return (
          <RHFContext value={{ field, fieldState, formState }}>
            {children}
          </RHFContext>
        );
      }}
    />
  );
};
