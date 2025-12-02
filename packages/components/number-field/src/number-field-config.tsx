"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { NumberField } from "./number-field";

export const [NumberFieldConfig, useNumberFieldConfig] = createConfigContext({
  displayName: "NumberFieldConfig",
});

export namespace NumberFieldConfig {
  export interface Props
    extends NumberField.Props,
      GlobalConfigProps<NumberField.Props> {}
}
