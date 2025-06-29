import { DataGrid } from "@jamsrui/react";
import { COLUMNS, USERS } from "./columns";

export const DataGridStickyHeader = () => {
  return <DataGrid columns={COLUMNS} data={USERS} isHeaderSticky />;
};
