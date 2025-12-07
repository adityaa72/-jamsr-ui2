"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Drawer } from "./drawer";

export const [DrawerConfig, useDrawerConfig] =
  createConfigContext<DrawerConfig.Props>({
    displayName: "DrawerConfig",
  });

export namespace DrawerConfig {
  export interface Props extends Drawer.Props, GlobalConfigProps<Drawer.Props> {}
}
