import { TableBody, TableCell, TableRow } from "@jamsrui/table";
import { flexRender } from "@tanstack/react-table";

import { useDataGridContext } from "./data-grid-context";

import type { Row } from "@tanstack/react-table";

export const DataGridBody = () => {
  const { table } = useDataGridContext();
  return (
    <TableBody>
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
