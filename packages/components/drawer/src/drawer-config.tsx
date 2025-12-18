"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Drawer } from "./drawer";

export const [DrawerConfig, useDrawerConfig] =
  createConfigContext<DrawerConfig.Props>({
    displayName: "DrawerConfig",
  });

export namespace DrawerConfig {
  export interface Props extends WithGlobalConfig<Drawer.Props> {}
}
