import { DataTable } from "@jamsrui/react";
import { COLUMNS, USERS } from "./columns";

export const DataTableUsage = () => {
  return <DataTable columns={COLUMNS} data={USERS} />;
};
