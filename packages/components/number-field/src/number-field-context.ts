"use client";

import { createContext, use } from "react";
import { useNumberField } from "./use-number-field";

export const NumberFieldContext =
  createContext<NumberFieldContext.Props | null>(null);

export const useNumberFieldContext = () => {
  const context = use(NumberFieldContext);
  if (!context) {
    throw new Error(
      "useNumberFieldContext must be used within a NumberFieldContext"
    );
  }
  return context;
};

export namespace NumberFieldContext {
  export interface Props extends ReturnType<typeof useNumberField> {}
}
