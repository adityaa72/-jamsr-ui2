"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";
import { ContextMenu } from ".";

export const [ContextMenuConfig, useContextMenuConfig] =
  createConfigContext<ContextMenuConfig.Props>({
    displayName: "ContextMenuConfig",
  });

export namespace ContextMenuConfig {
  export interface Props extends WithGlobalConfig<ContextMenu.Props> {}
}
