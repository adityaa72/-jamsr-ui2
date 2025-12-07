"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { TimeField } from "./time-field";

export const [TimeFieldConfig, useTimeFieldConfig] =
  createConfigContext<TimeFieldConfig.Props>({
    displayName: "TimeFieldConfig",
  });

export namespace TimeFieldConfig {
  export type Props = WithGlobalConfig<TimeField.Props>;
}
