"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Chip } from "./chip";

export const [ChipConfig, useChipConfig] =
  createConfigContext<ChipConfig.Props>({
    displayName: "ChipConfig",
  });

export namespace ChipConfig {
  export interface Props extends WithGlobalConfig<Chip.Props> {}
}
