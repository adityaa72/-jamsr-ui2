import { createConfigContext } from "@jamsrui/utils";

import type { Autocomplete } from "./autocomplete";

export const [AutocompleteConfig, useAutocompleteConfig] =
  createConfigContext<AutocompleteConfig.Props>({
    displayName: "AutocompleteConfig",
  });

export namespace AutocompleteConfig {
  export interface Props extends Autocomplete.Props {}
}
