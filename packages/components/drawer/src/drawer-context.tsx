"use client";
import { createContext, use } from "react";

import type { useDrawer } from "./use-drawer";

export const DrawerContext = createContext<DrawerContext.Props | null>(null);
export const useDrawerContext = () => {
  const ctx = use(DrawerContext);
  if (!ctx)
    throw new Error("useDrawerContext must be used within DrawerContext");
  return ctx;
};

export namespace DrawerContext {
  export interface Props extends ReturnType<typeof useDrawer> {}
}
