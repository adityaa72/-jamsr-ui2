"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Menu } from "./menu";

export const [MenuConfig, useMenuConfig] =
  createConfigContext<MenuConfig.Props>({
    displayName: "MenuConfigContext",
  });

export namespace MenuConfig {
  export interface Props extends WithGlobalConfig<Menu.Props> {}
}
