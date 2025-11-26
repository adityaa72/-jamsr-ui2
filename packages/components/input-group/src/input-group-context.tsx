"use client";

import { createContext, use } from "react";
import { useInputGroup } from "./use-input-group";

export const InputGroupContext = createContext<InputGroupContext.Props | null>(
  null
);

export const useInputGroupContext = () => {
  const ctx = use(InputGroupContext);
  if (!ctx)
    throw new Error(
      "useInputGroupContext must be used within InputGroupContextProvider"
    );
  return ctx;
};

export const useInputGroupContextOpt = () => {
  const ctx = use(InputGroupContext);
  return ctx;
};

export namespace InputGroupContext {
  export interface Props extends ReturnType<typeof useInputGroup> {}
}
