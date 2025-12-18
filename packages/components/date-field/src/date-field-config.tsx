"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { DateField } from "./date-field";

export const [DateFieldConfig, useDateFieldConfig] =
  createConfigContext<DateFieldConfig.Props>({
    displayName: "DateFieldConfig",
  });

export namespace DateFieldConfig {
  export interface Props extends WithGlobalConfig<DateField.Props> {}
}
