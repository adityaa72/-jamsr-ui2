"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { DatePicker } from "./date-picker";

export const [DatePickerConfig, useDatePickerConfig] =
  createConfigContext<DatePickerConfig.Props>({
    displayName: "DatepickerContext",
  });

export namespace DatePickerConfig {
  export interface Props extends WithGlobalConfig<DatePicker.Props> {}
}
