"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Tabs } from "./tabs";

export const [TabsConfig, useTabsConfig] =
  createConfigContext<TabsConfig.Props>({
    displayName: "TabsConfig",
  });

export namespace TabsConfig {
  export interface Props extends WithGlobalConfig<Tabs.Props> {}
}
