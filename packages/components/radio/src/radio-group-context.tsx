"use client";

import { createContext, use } from "react";

import type { useRadioGroup } from "./use-radio-group";

export const RadioGroupContext = createContext<RadioGroupContext.Props | null>(
  null
);

export const useRadioGroupContext = () => {
  const ctx = use(RadioGroupContext);
  if (!ctx)
    throw new Error(
      "useRadioGroupContext must be used within RadioGroupContext"
    );
  return ctx;
};

export namespace RadioGroupContext {
  export interface Props extends ReturnType<typeof useRadioGroup> {}
}
