"use client";
import { createContext, use } from "react";

export const TabContext = createContext<TabContext.Type | null>(null);

export const useTabContext = () => {
  const context = use(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabContext");
  }
  return context;
};

export namespace TabContext {
  export interface Type {
    isActive: boolean;
  }
}
