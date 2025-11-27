"use client";
import { createContext, use } from "react";

import type { useSwitch } from "./use-switch";

export const SwitchContext = createContext<SwitchContext.Props | null>(null);

export const useSwitchContext = () => {
  const ctx = use(SwitchContext);
  if (!ctx)
    throw new Error("useSwitchContext must be used within SwitchContext");
  return ctx;
};

export namespace SwitchContext {
  export interface Props extends ReturnType<typeof useSwitch> {}
}
