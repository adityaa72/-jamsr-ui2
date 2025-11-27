"use client";

import { createContext, use } from "react";
import { useIconButton } from "./use-icon-button";

export const IconButtonContext = createContext<IconButtonContext.Props | null>(
  null
);

export const useIconButtonContext = () => {
  const ctx = use(IconButtonContext);
  if (!ctx) {
    throw new Error(
      "useIconButtonContext must be used within a IconButtonContext"
    );
  }
  return ctx;
};

export namespace IconButtonContext {
  export interface Props extends ReturnType<typeof useIconButton> {}
}
