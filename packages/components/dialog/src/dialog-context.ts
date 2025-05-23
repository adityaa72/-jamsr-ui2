import { createContext, use } from "react";

import type { useDialog } from "./use-dialog";

export const DialogContext = createContext<DialogContext.Type | null>(null);

export const useDialogContext = () => {
  const ctx = use(DialogContext);
  if (!ctx)
    throw new Error("useDialogContext must be used within DialogContext");
  return ctx;
};

export namespace DialogContext {
  export interface Type extends ReturnType<typeof useDialog> {}
}
