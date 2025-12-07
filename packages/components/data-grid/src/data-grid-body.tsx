"use client";
import { TableBody, TableCell, TableRow } from "@jamsrui/table";
import { flexRender } from "@tanstack/react-table";

import { useDataGridContext } from "./data-grid-context";
import { DataGridEmpty } from "./data-grid-empty";
import { getPinningStyles } from "./utils";

import type { Row } from "@tanstack/react-table";

export const DataGridBody = () => {
  const { table, isEmpty: isEmtpy } = useDataGridContext();
  return (
    <TableBody>
      {!!isEmtpy && <DataGridEmpty />}
      {table.getRowModel().rows.map((row) => {
        return (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <TableCell
                  key={cell.id}
                  data-pinned={cell.column.getIsPinned() || undefined}
                  style={{
                    width: cell.column.getSize(),
                    ...getPinningStyles(cell.column),
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export interface DataGridBodyProps<T> {
  rows: Row<T>[];
}
