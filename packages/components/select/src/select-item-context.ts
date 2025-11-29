"use client";

import { createContext, use } from "react";

export const SelectItemContext = createContext<SelectItemContext.Props>({
  isSelected: false,
});
export const useSelectItemContext = () => {
  const ctx = use(SelectItemContext);
  if (!ctx)
    throw new Error(
      "useSelectItemContext must be used within SelectItemContext"
    );
  return ctx;
};

export namespace SelectItemContext {
  export interface Props {
    isSelected: boolean;
  }
}
