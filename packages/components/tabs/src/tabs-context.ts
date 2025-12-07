"use client";
import { createContext, use } from "react";

import type { useTabs } from "./use-tabs";

export const TabsContext = createContext<TabsContext.Type | null>(null);

export const useTabsContext = () => {
  const context = use(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a TabsContext");
  }
  return context;
};

export namespace TabsContext {
  export interface Type extends ReturnType<typeof useTabs> {}
}
