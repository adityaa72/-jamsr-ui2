"use client";
import { createContext, use } from "react";

import type { useDateField } from "./use-date-field";

export const DateFieldContext = createContext<DateFieldContext.Props | null>(
  null
);

export const useDateFieldContext = () => {
  const ctx = use(DateFieldContext);
  if (!ctx)
    throw new Error("useDateFieldContext must be used within DateFieldContext");
  return ctx;
};

export namespace DateFieldContext {
  export interface Props extends ReturnType<typeof useDateField> {}
}
