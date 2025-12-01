"use client";

import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Table } from "./table";

export const [TableConfig, useTableConfig] =
  createConfigContext<TableConfig.Props>({
    displayName: "TableConfig",
  });

export namespace TableConfig {
  export interface Props extends Table.Props, GlobalConfigProps<Table.Props> {}
}
