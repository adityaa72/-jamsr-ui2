import { useMemo, useState } from "react";

import {
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type { Table } from "@jamsrui/table";
import type {
  ColumnFiltersState,
  ColumnOrderState,
  PaginationState,
  RowPinningState,
  RowSelectionState,
  SortingState,
  TableOptions,
  VisibilityState
} from "@tanstack/react-table";

export const useDataGrid = <TData>(props: useDataGrid.Props<TData>) => {
  const {
    columns,
    data,
    state,
    isLoading,
    isHeaderSticky,
    variant,
    radius,
    density,
    allowHover,
    separateRows,
    ...tableProps
  } = props;

  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageSize: 10,
    pageIndex: 0,
  });
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [rowPinning, setRowPinning] = useState<RowPinningState>({
    bottom: [],
    top: [],
  });
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);

  const isEmpty = data.length === 0;

  const table = useReactTable({
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getExpandedRowModel: getExpandedRowModel(),
    onColumnOrderChange: setColumnOrder,
    onRowPinningChange: setRowPinning,
    ...tableProps,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
      columnOrder,
      ...state,
    },
    data,
    columns,
  });

  const rootProps = useMemo(
    () => ({
      isHeaderSticky,
      variant,
      radius,
      density,
      allowHover,
      separateRows,
    }),
    [allowHover, density, isHeaderSticky, radius, separateRows, variant]
  );

  return useMemo(
    () => ({
      table,
      isLoading,
      isEmpty,
      rootProps,
    }),
    [isEmpty, isLoading, rootProps, table]
  );
};

export namespace useDataGrid {
  export interface Props<TData>
    extends Pick<TableOptions<TData>, "data" | "columns">,
      Partial<Omit<TableOptions<TData>, "data" | "columns">>,
      Pick<
        Table.Props,
        | "isHeaderSticky"
        | "variant"
        | "radius"
        | "density"
        | "allowHover"
        | "separateRows"
      > {
    isLoading?: boolean;
  }
}
