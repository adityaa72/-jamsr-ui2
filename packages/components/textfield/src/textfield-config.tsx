"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";
import { TextField } from "./textfield";

export const [TextFieldConfig, useTextFieldConfig] =
  createConfigContext<TextFieldConfig.Props>({
    displayName: "TextFieldConfigContext",
  });

export namespace TextFieldConfig {
  export interface Props extends WithGlobalConfig<TextField.Props> {}
}
