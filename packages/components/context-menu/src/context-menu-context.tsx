import { createContext, use } from "react";

import type { useContextMenu } from "./use-context-menu";

export const ContextMenuContext =
  createContext<ContextMenuContext.Props | null>(null);

export const useContextMenuContext = () => {
  const context = use(ContextMenuContext);
  if (!context) {
    throw new Error(
      "useContextMenuContext must be used within a ContextMenuContext"
    );
  }
  return context;
};

export namespace ContextMenuContext {
  export interface Props extends ReturnType<typeof useContextMenu> {}
}
