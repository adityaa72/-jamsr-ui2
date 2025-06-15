import { TableBody, TableCell, TableRow } from "@jamsrui/table";
import { flexRender } from "@tanstack/react-table";

import { useDataTableContext } from "./data-table-context";

import type { Row } from "@tanstack/react-table";

export const DataTableBody = () => {
  const { table } = useDataTableContext();
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

export interface DataTableBodyProps<T> {
  rows: Row<T>[];
}
