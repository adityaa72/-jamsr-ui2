"use client";
import { createContext, use } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";

export const RHFContext = createContext<RHFContext.Props<any, any> | null>(
  null
);

export const useRHFContext = () => {
  const context = use(RHFContext);
  if (!context) {
    throw new Error("useRHFContext must be used within a RHFContext.Provider");
  }
  return context;
};

export namespace RHFContext {
  export interface Props<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>,
  > {
    field: ControllerRenderProps<TFieldValues, TName>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
  }
}
