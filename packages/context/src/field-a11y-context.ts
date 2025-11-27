"use client";
import { createContext, use } from "react";

import type { useFieldA11y } from "./use-field-a11y";

export const FieldA11yContext = createContext<FieldA11yContext.Props | null>(
  null
);

export const useFieldA11yContext = () => {
  const ctx = use(FieldA11yContext);
  return ctx;
};

export namespace FieldA11yContext {
  export interface Props extends ReturnType<typeof useFieldA11y> {}
}
