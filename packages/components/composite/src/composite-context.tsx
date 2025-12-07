"use client";
import { createContext, use } from "react";

import type { useComposite } from "./use-composite";

export const CompositeContext = createContext<CompositeContext.Props | null>(
  null
);

export namespace CompositeContext {
  export interface Props extends ReturnType<typeof useComposite> {}
}

export const useCompositeContext = () => {
  const ctx = use(CompositeContext);
  if (!ctx) {
    throw new Error("useCompositeContext must be used within a Composite");
  }
  return ctx;
};
