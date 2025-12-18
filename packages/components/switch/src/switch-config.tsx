"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Switch } from "./switch";

export const [SwitchConfig, useSwitchConfig] =
  createConfigContext<SwitchConfig.Props>({
    displayName: "SwitchConfig",
  });

export namespace SwitchConfig {
  export interface Props extends WithGlobalConfig<Switch.Props> {}
}
