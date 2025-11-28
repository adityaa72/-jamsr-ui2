"use client";

import { createContext, use } from "react";

import type { useMenu } from "./use-menu";

export const MenuContext = createContext<MenuContext.Props | null>(null);

export const useMenuContext = () => {
  const ctx = use(MenuContext);
  if (!ctx) throw new Error("useMenuContext must be used within MenuContext");
  return ctx;
};

export namespace MenuContext {
  export interface Props extends ReturnType<typeof useMenu> {}
}
