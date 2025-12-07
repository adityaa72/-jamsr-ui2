"use client";
import { TableCell, TableRow } from "@jamsrui/table";

import { useDataGridContext } from "./data-grid-context";

export const DataGridEmpty = () => {
  const { table } = useDataGridContext();
  const totalColumns = table.getAllColumns().length;
  return (
    <TableRow>
      <TableCell colSpan={totalColumns}>No data available</TableCell>
    </TableRow>
  );
};

export namespace DataGridEmpty {
  export interface Props {}
}
