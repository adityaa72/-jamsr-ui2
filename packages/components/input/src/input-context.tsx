import { createContext, use } from "react";

import type { useInput } from "./use-input";

export const InputContext = createContext<InputContext.Props | null>(null);

export const useInputContext = () => {
  const ctx = use(InputContext);
  if (!ctx)
    throw new Error("useInputContext must be used within InputContextProvider");
  return ctx;
};

export namespace InputContext {
  export interface Props extends ReturnType<typeof useInput> {}
}
