"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Checkbox } from "./checkbox";

export const [CheckboxConfig, useCheckboxConfig] =
  createConfigContext<CheckboxConfig.Props>({
    displayName: "CheckboxConfig",
  });

export namespace CheckboxConfig {
  export interface Props
    extends Checkbox.Props,
      GlobalConfigProps<Checkbox.Props> {}
}
