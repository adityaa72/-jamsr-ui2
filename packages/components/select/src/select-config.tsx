"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Select } from "./select";

export const [SelectConfig, useSelectConfig] = createConfigContext({
  displayName: "SelectConfig",
});

export namespace SelectConfig {
  export interface Props
    extends Select.Props,
      GlobalConfigProps<Select.Props> {}
}
