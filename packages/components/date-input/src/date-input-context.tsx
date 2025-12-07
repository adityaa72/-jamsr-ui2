"use client";
import { createContext, use } from "react";

import type { useDateInput } from "./use-date-input";

export const DateInputContext = createContext<DateInputContext.Props | null>(
  null
);

export const useDateInputContext = () => {
  const ctx = use(DateInputContext);
  if (!ctx)
    throw new Error("useDateInputContext must be used within DateInputContext");
  return ctx;
};

export namespace DateInputContext {
  export interface Props extends ReturnType<typeof useDateInput> {}
}
