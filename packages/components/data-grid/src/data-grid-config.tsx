"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { DataGrid } from "./data-grid";

export const [DataGridConfig, useDataGridConfig] =
  createConfigContext<DataGridConfig.Props>({
    displayName: "DataGridConfig",
  });

export namespace DataGridConfig {
  export interface Props extends WithGlobalConfig<DataGrid.Props> {
    children: React.ReactNode;
  }
}
