"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";
import { Input } from "./input";

export const [InputConfig, useInputConfig] =
  createConfigContext<InputConfig.Props>({
    displayName: "InputConfigContext",
  });

export namespace InputConfig {
  export interface Props extends WithGlobalConfig<Input.Props> {}
}
