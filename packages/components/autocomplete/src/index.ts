import { Autocomplete as AutocompleteRoot } from "./autocomplete";
import {
  AutocompleteConfig,
  useAutocompleteConfig,
} from "./autocomplete-config";
import { AutocompleteItem } from "./autocomplete-item";
import {
  AutocompleteSlots,
  AutocompleteVariantProps,
  autocompleteVariants,
} from "./styles";
import { useAutocomplete } from "./use-autocomplete";

export {
  AutocompleteConfig,
  AutocompleteItem,
  autocompleteVariants,
  useAutocomplete,
  useAutocompleteConfig,
  type AutocompleteSlots,
  type AutocompleteVariantProps,
};

export const Autocomplete = Object.assign(AutocompleteRoot, {
  Item: AutocompleteItem,
});

export namespace Autocomplete {
  export interface Props extends AutocompleteRoot.Props {}
  export interface Config extends AutocompleteConfig.Props {}
  export interface Item extends AutocompleteItem.Props {}
}
