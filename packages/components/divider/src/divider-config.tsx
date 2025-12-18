"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Divider } from "./divider";

export const [DividerConfig, useDividerConfig] =
  createConfigContext<DividerConfig.Props>({
    displayName: "DividerConfig",
  });

export namespace DividerConfig {
  export interface Props extends WithGlobalConfig<Divider.Props> {}
}
