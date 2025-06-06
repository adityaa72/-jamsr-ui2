import { createContext, use } from "react";

import type { useAutocomplete } from "./use-autocomplete";

export const AutocompleteContext =
  createContext<AutocompleteContext.Props | null>(null);

export const useAutocompleteContext = () => {
  const ctx = use(AutocompleteContext);
  if (!ctx)
    throw new Error("useAutocompleteContext must be used within Autocomplete");
  return ctx;
};

export namespace AutocompleteContext {
  export interface Props extends ReturnType<typeof useAutocomplete> {}
}
