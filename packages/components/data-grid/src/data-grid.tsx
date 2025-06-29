import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { DataGridBody } from "./data-grid-body";
import { DataGridColumnVisibility } from "./data-grid-column-visibility";
import { useDataGridConfig } from "./data-grid-config";
import { DataGridContext } from "./data-grid-context";
import { DataGridHeader } from "./data-grid-header";
import { DataGridLoading } from "./data-grid-loading";
import { DataGridPagination } from "./data-grid-pagination";
import { DataGridTable } from "./data-grid-table";
import { useDataGrid } from "./use-data-grid";

export const DataGrid = (props: DataGrid.Props) => {
  const config = useDataGridConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useDataGrid(mergedProps);

  const composedChildren = (
    <>
      <DataGridColumnVisibility />
      {!!ctx.isLoading && <DataGridLoading />}
      <DataGridTable>
        <DataGridHeader />
        <DataGridBody />
      </DataGridTable>
      <DataGridPagination />
    </>
  );
  const renderElement = useRenderElement("div", {
    props: [
      {
        "data-component": "data-grid",
        "data-slot": "root",
        className: "relative flex flex-col gap-2",
      },
      { children: composedChildren },
    ],
  });
  return <DataGridContext value={ctx}>{renderElement}</DataGridContext>;
};

export namespace DataGrid {
  export interface Props extends useDataGrid.Props<any> {}
}
