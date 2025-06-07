import { createContext, use } from "react";

import type { useClipboard } from "./use-clipboard";

export const ClipboardContext = createContext<ClipboardContext.Props | null>(
  null
);

export const useClipboardContext = () => {
  const ctx = use(ClipboardContext);
  if (!ctx) {
    throw new Error("useClipboardContext must be with with a ClipboardContext");
  }
  return ctx;
};

export namespace ClipboardContext {
  export interface Props extends ReturnType<typeof useClipboard> {}
}
