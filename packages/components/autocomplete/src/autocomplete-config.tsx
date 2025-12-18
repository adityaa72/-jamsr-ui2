"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Autocomplete } from "./autocomplete";

export const [AutocompleteConfig, useAutocompleteConfig] =
  createConfigContext<AutocompleteConfig.Props>({
    displayName: "AutocompleteConfig",
  });

export namespace AutocompleteConfig {
  export interface Props extends WithGlobalConfig<Autocomplete.Props> {}
}
