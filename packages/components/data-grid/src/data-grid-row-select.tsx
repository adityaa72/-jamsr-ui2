import { Checkbox } from "@jamsrui/checkbox";

import { useDataGridContext } from "./data-grid-context";

import type { Row } from "@tanstack/react-table";

export const DataGridRowSelect = ({ row }: { row: Row<any> }) => {
  return (
    <Checkbox
      aria-label="Select Row"
      isChecked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(value)}
    />
  );
};

export const DataGridRowSelectAll = () => {
  const { table } = useDataGridContext();
  return (
    <Checkbox
      aria-label="Select All Rows"
      isChecked={table.getIsAllPageRowsSelected()}
      isIntermediate={table.getIsSomePageRowsSelected()}
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(value)}
    />
  );
};
