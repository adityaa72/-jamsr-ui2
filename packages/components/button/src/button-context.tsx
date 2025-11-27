"use client";

import { createContext, use } from "react";
import { useButton } from "./use-button";

export const ButtonContext = createContext<ButtonContext.Props | null>(null);

export const useButtonContext = () => {
  const ctx = use(ButtonContext);
  if (!ctx) {
    throw new Error("useButtonContext must be used within a ButtonContext");
  }
  return ctx;
};

export namespace ButtonContext {
  export interface Props extends ReturnType<typeof useButton> {}
}
