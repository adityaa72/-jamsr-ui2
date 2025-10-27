import { createContext, use } from "react";

import type { useRadio } from "./use-radio";

export const RadioContext = createContext<RadioContext.Props | null>(null);

export const useRadioContext = () => {
  const ctx = use(RadioContext);
  if (!ctx) throw new Error("useRadioContext must be used within RadioContext");
  return ctx;
};

export namespace RadioContext {
  export interface Props extends ReturnType<typeof useRadio> {}
}
