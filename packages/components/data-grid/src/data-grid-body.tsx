import { TableBody, TableCell, TableRow } from "@jamsrui/table";
import { flexRender } from "@tanstack/react-table";

import { useDataGridContext } from "./data-grid-context";
import { DataGridEmpty } from "./data-grid-empty";

import type { Row } from "@tanstack/react-table";

export const DataGridBody = () => {
  const { table, isEmtpy } = useDataGridContext();
  return (
    <TableBody>
      {!!isEmtpy && <DataGridEmpty />}
      {table.getRowModel().rows.map((row) => {
        return (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <TableCell key={cell.id}>
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
