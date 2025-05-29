import { createContext, use } from "react";

import type { useChip } from "./use-chip";

export const ChipContext = createContext<ChipContext.Props | null>(null);

export const useChipContext = () => {
  const ctx = use(ChipContext);
  if (!ctx) {
    throw new Error("useChipContext must be used within a ChipContext");
  }
  return ctx;
};

export namespace ChipContext {
  export interface Props extends ReturnType<typeof useChip> {}
}
