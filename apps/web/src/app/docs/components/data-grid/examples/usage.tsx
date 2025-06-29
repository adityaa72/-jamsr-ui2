import { DataGrid } from "@jamsrui/react";
import { COLUMNS, USERS } from "./columns";

export const DataGridUsage = () => {
  return <DataGrid columns={COLUMNS} data={USERS} />;
};
