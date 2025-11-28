"use client";

import { createContext, use } from "react";

export const MenuRadioGroupContext =
  createContext<MenuRadioGroupContext.Props | null>(null);

export const useMenuRadioGroupContext = () => {
  const ctx = use(MenuRadioGroupContext);
  if (!ctx) {
    throw new Error(
      "useMenuRadioGroupContext must be used within a MenuRadioGroup"
    );
  }
  return ctx;
};

export namespace MenuRadioGroupContext {
  export interface Props {
    isDisabled: boolean | undefined;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }
}
