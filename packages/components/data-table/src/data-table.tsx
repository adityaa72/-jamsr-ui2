import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { DataTableBody } from "./data-table-body";
import { useDataTableConfig } from "./data-table-config";
import { DataTableContext } from "./data-table-context";
import { DataTableHeader } from "./data-table-header";
import { DataTablePagination } from "./data-table-pagination";
import { DataTableTable } from "./data-table-table";
import { useDataTable } from "./use-data-table";

export const DataTable = <TData, TValue>(
  props: DataTable.Props<TData, TValue>
) => {
  const config = useDataTableConfig() as DataTable.Props<TData, TValue>;
  const mergedProps = mergeProps(config, props);
  const ctx = useDataTable<TData, TValue>(mergedProps);

  const composedChildren = (
    <>
      <DataTableTable>
        <DataTableHeader />
        <DataTableBody />
      </DataTableTable>
      <DataTablePagination />
    </>
  );
  const renderElement = useRenderElement("div", {
    props: [{ children: composedChildren }],
  });
  return <DataTableContext value={ctx}>{renderElement}</DataTableContext>;
};

export namespace DataTable {
  export interface Props<TData, TValue>
    extends useDataTable.Props<TData, TValue> {}
}
