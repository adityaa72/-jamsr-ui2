import { createContext, use } from "react";
import { Autocomplete } from "./autocomplete";

const AutocompleteContext = createContext<AutocompleteConfig.Props>({});
export const AutocompleteConfig = (props: AutocompleteConfig.Props) => {
  const { children, ...restProps } = props;
  return <AutocompleteContext value={restProps}>{children}</AutocompleteContext>;
};

export const useAutocompleteConfig = () => {
  const context = use(AutocompleteContext);
  return context;
};

export namespace AutocompleteConfig {
  export interface Props extends Autocomplete.Props {}
}
