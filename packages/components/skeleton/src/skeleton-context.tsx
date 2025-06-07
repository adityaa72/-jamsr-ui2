import { createContext, use } from "react";

import type { useSkeleton } from "./use-skeleton";

export const SkeletonContext = createContext<SkeletonContext.Props | null>(
  null
);
export const useSkeletonContext = () => {
  const ctx = use(SkeletonContext);
  if (!ctx) {
    throw new Error("useSkeletonContext must be used within a SkeletonContext");
  }
  return ctx;
};

export namespace SkeletonContext {
  export interface Props extends ReturnType<typeof useSkeleton> {}
}
