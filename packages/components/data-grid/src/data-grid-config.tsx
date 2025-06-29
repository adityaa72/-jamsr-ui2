import { createConfigContext } from "@jamsrui/utils";

import type { DataGrid } from "./data-grid";

export const [DataGridConfig, useDataGridConfig] = createConfigContext<
  // @ts-expect-error type-error
  DataGridConfig.Props<any, any>
>({
  displayName: "DataGridConfig",
});

export namespace DataGridConfig {
  export interface Props<TData, TValue>
    extends DataGrid.Props<TData, TValue> {}
}
