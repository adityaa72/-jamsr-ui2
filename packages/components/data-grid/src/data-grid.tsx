import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { DataGridBody } from "./data-grid-body";
import { DataGridColumnVisibility } from "./data-grid-column-visibility";
import { useDataGridConfig } from "./data-grid-config";
import { DataGridContext } from "./data-grid-context";
import { DataGridHeader } from "./data-grid-header";
import { DataGridPagination } from "./data-grid-pagination";
import { DataGridTable } from "./data-grid-table";
import { useDataGrid } from "./use-data-grid";

export const DataGrid = <TData, TValue>(
  props: DataGrid.Props<TData, TValue>
) => {
  const config = useDataGridConfig() as DataGrid.Props<TData, TValue>;
  const mergedProps = mergeProps(config, props);
  const ctx = useDataGrid<TData, TValue>(mergedProps);

  const composedChildren = (
    <>
      <DataGridColumnVisibility />
      <DataGridTable>
        <DataGridHeader />
        <DataGridBody />
      </DataGridTable>
      <DataGridPagination />
    </>
  );
  const renderElement = useRenderElement("div", {
    props: [{ children: composedChildren }],
  });
  return <DataGridContext value={ctx}>{renderElement}</DataGridContext>;
};

export namespace DataGrid {
  export interface Props<TData, TValue>
    extends useDataGrid.Props<TData, TValue> {}
}
