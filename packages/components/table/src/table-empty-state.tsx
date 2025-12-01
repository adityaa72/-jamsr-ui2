"use client";

import { TableCell } from "./table-cell";
import { TableRow } from "./table-row";

export const TableEmptyState = () => {
  return (
    <TableRow>
      <TableCell className="text-center py-12" colSpan={100}>
        No data found
      </TableCell>
    </TableRow>
  );
};
