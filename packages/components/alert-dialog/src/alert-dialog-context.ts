"use client";

import { createContext, use } from "react";

import type { useAlertDialog } from "./use-alert-dialog";

export const AlertDialogContext =
  createContext<AlertDialogContext.Props | null>(null);

export namespace AlertDialogContext {
  export interface Props extends ReturnType<typeof useAlertDialog> {}
}

export const useAlertDialogContext = () => {
  const context = use(AlertDialogContext);
  if (!context) {
    throw new Error(
      "useAlertDialogContext must be used within a AlertDialogContext.Provider"
    );
  }
  return context;
};
