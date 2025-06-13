import { createContext, use } from "react";

import type { useCheckbox } from "./use-checkbox";

export const CheckboxContext = createContext<CheckboxContext.Props | null>(
  null
);

export const useCheckboxContext = () => {
  const context = use(CheckboxContext);
  if (!context) {
    throw new Error("useCheckboxContext must be used within a CheckboxContext");
  }
  return context;
};

export namespace CheckboxContext {
  export interface Props extends ReturnType<typeof useCheckbox> {}
}
