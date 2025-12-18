"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";
import { FieldError } from "./field-error";

export const [FieldErrorConfig, useFieldErrorConfig] =
  createConfigContext<FieldErrorConfig.Props>({
    displayName: "FieldErrorConfigContext",
  });

export namespace FieldErrorConfig {
  export interface Props extends WithGlobalConfig<FieldError.Props> {}
}
