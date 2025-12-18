"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";
import { InputGroup } from "./input-group";

export const [InputGroupConfig, useInputGroupConfig] =
  createConfigContext<InputGroupConfig.Props>({
    displayName: "InputGroupConfigContext",
  });

export namespace InputGroupConfig {
  export interface Props extends WithGlobalConfig<InputGroup.Props> {}
}
