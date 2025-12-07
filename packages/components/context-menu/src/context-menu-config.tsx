"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

export const [ContextMenuConfig, useContextMenuConfig] =
  createConfigContext<ContextMenuConfig.Props>({
    displayName: "ContextMenuConfig",
  });

export namespace ContextMenuConfig {
  export interface Props {}
}
