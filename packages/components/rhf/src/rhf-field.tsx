"use client";

import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { RHFContext } from "./rhf-context";

export const RHFField = <T extends FieldValues>(props: {
  name: Path<T>;
  children: React.ReactNode;
}) => {
  const { name, children } = props;
  const { control } = useFormContext<T>();
  return (
    <Controller
      name={name}
      control={control}
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
