"use client";

import { createContext, use } from "react";

import type { useTooltip } from "./use-tooltip";

export const TooltipContext = createContext<TooltipContext.Props | null>(null);

export const useTooltipContext = () => {
  const ctx = use(TooltipContext);
  if (!ctx) {
    throw new Error(
      "useTooltipContext must be used within a TooltipContext.Provider"
    );
  }
  return ctx;
};

export namespace TooltipContext {
  export interface Props extends ReturnType<typeof useTooltip> {}
}
