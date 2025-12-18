"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Collapsible } from "./collapsible";

export const [CollapsibleConfig, useCollapsibleConfig] =
  createConfigContext<CollapsibleConfig.Props>({
    displayName: "CollapsibleConfig",
  });

export namespace CollapsibleConfig {
  export interface Props extends WithGlobalConfig<Collapsible.Props> {}
}
