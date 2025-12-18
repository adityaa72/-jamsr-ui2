"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Tooltip } from "./tooltip";

export const [TooltipConfig, useTooltipConfig] =
  createConfigContext<TooltipConfig.Props>({
    displayName: "TooltipConfigContext",
  });

export namespace TooltipConfig {
  export interface Props extends WithGlobalConfig<Tooltip.Props> {}
}
