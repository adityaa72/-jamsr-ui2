import { DataGrid } from "@jamsrui/react";
import { COLUMNS } from "./columns";

export const DataGridEmptyState = () => {
  return <DataGrid columns={COLUMNS} data={[]} />;
};
