"use client";

import { createContext, use } from "react";

import type { usePopover } from "./use-popover";

export const PopoverContext = createContext<PopoverContext.Type | null>(null);

export const usePopoverContext = () => {
  const context = use(PopoverContext);
  if (!context) {
    throw new Error(
      "usePopoverContext must be used within a PopoverContextProvider"
    );
  }
  return context;
};

export namespace PopoverContext {
  export interface Type extends ReturnType<typeof usePopover> {}
}
