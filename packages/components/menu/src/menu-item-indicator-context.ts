"use client";

import { createContext, use } from "react";

export const MenuItemIndicatorContext =
  createContext<MenuItemIndicatorContext.Props>({
    isChecked: false,
  });

export const useMenuItemIndicatorContext = () => use(MenuItemIndicatorContext);

export namespace MenuItemIndicatorContext {
  export interface Props {
    isChecked: boolean;
  }
}
