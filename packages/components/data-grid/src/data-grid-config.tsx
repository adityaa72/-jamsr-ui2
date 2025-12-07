"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { DataGrid } from "./data-grid";

export const [DataGridConfig, useDataGridConfig] =
  createConfigContext<DataGridConfig.Props>({
    displayName: "DataGridConfig",
  });

export namespace DataGridConfig {
  export interface Props extends DataGrid.Props {
    children: React.ReactNode;
  }
}
