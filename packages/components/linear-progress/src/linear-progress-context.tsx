import { createContext, use } from "react";

import type { useLinearProgress } from "./use-linear-progress";

export const LinearProgressContext =
  createContext<LinearProgressContext.Props | null>(null);

export const useLinearProgressContext = () => {
  const context = use(LinearProgressContext);
  if (!context) {
    throw new Error(
      "useLinearProgressContext must be used within a LinearProgress"
    );
  }
  return context;
};

export namespace LinearProgressContext {
  export interface Props extends ReturnType<typeof useLinearProgress> {}
}
