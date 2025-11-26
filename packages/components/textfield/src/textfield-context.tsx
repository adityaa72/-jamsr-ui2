"use client";

import { createContext, use } from "react";
import { useTextField } from "./use-textfield";

export const TextFieldContext = createContext<TextFieldContext.Props | null>(
  null
);

export const useTextFieldContext = () => {
  const ctx = use(TextFieldContext);
  return ctx;
};

export namespace TextFieldContext {
  export interface Props extends ReturnType<typeof useTextField> {}
}
