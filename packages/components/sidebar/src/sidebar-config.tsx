"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Sidebar } from "./sidebar";

export const [SidebarConfig, useSidebarConfig] =
  createConfigContext<SidebarConfig.Props>({
    displayName: "SidebarConfigContext",
  });

export namespace SidebarConfig {
  export interface Props
    extends Sidebar.Props,
      GlobalConfigProps<Sidebar.Props> {}
}
