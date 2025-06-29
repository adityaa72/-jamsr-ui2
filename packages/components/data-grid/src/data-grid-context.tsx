import { createContext, use } from "react";

import type { useDataGrid } from "./use-data-grid";

export const DataGridContext = createContext<DataGridContext.Props | null>(
  null
);

export const useDataGridContext = () => {
  const ctx = use(DataGridContext);
  if (!ctx) {
    throw new Error(
      "useDataGridContext must be used within a DataGridContext"
    );
  }
  return ctx;
};

export namespace DataGridContext {
  export interface Props extends ReturnType<typeof useDataGrid> {}
}
