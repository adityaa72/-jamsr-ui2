import { createConfigContext } from "@jamsrui/utils";

import type { DataTable } from "./data-table";

export const [DataTableConfig, useDataTableConfig] = createConfigContext<
  // @ts-expect-error type-error
  DataTableConfig.Props<any, any>
>({
  displayName: "DataTableConfig",
});

export namespace DataTableConfig {
  export interface Props<TData, TValue>
    extends DataTable.Props<TData, TValue> {}
}
