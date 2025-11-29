"use client";

import { createContext, use } from "react";

import type { useSidebar } from "./use-sidebar";

export const SidebarContext = createContext<SidebarContext.Type | null>(null);

export const useSidebarContext = () => {
  const ctx = use(SidebarContext);
  if (!ctx)
    throw new Error(
      "useSidebarContext must be used within SidebarContextProvider"
    );
  return ctx;
};

export namespace SidebarContext {
  export interface Type extends ReturnType<typeof useSidebar> {}
}
