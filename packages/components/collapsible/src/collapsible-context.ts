import { createContext, use } from "react";

import type { useCollapsible } from "./use-collapsible";

export const CollapsibleContext =
  createContext<CollapsibleContext.Props | null>(null);
export const useCollapsibleContext = () => {
  const ctx = use(CollapsibleContext);
  if (!ctx)
    throw new Error("useCollapsibleContext must be used within Collapsible");
  return ctx;
};

export namespace CollapsibleContext {
  export interface Props extends ReturnType<typeof useCollapsible> {}
}
