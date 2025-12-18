"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Popover } from "./popover";

export const [PopoverConfig, usePopoverConfig] =
  createConfigContext<PopoverConfig.Props>({
    displayName: "PopoverConfigContext",
  });

export namespace PopoverConfig {
  export interface Props extends WithGlobalConfig<Popover.Props> {}
}
