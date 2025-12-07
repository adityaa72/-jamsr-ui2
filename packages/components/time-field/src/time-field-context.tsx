"use client";
import { createContext, use } from "react";

import type { useTimeField } from "./use-time-field";

export const TimeFieldContext = createContext<TimeFieldContext.Props | null>(
  null
);

export const useTimeFieldContext = () => {
  const ctx = use(TimeFieldContext);
  if (!ctx)
    throw new Error("useTimeFieldContext must be used within TimeFieldContext");
  return ctx;
};

export namespace TimeFieldContext {
  export interface Props extends ReturnType<typeof useTimeField> {}
}
