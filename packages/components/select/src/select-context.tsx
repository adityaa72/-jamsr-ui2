import { createContext, use } from "react";

import type { useSelect } from "./use-select";

export const SelectContext = createContext<SelectContent.Props | null>(null);
export const useSelectContext = () => {
  const ctx = use(SelectContext);
  if (!ctx)
    throw new Error("useSelectContext must be used within SelectContext");
  return ctx;
};

export namespace SelectContent {
  export interface Props extends ReturnType<typeof useSelect> {}
}
