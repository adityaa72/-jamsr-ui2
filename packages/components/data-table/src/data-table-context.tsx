import { createContext, use } from "react";

import type { useDataTable } from "./use-data-table";

export const DataTableContext = createContext<DataTableContext.Props | null>(
  null
);

export const useDataTableContext = () => {
  const ctx = use(DataTableContext);
  if (!ctx) {
    throw new Error(
      "useDataTableContext must be used within a DataTableContext"
    );
  }
  return ctx;
};

export namespace DataTableContext {
  export interface Props extends ReturnType<typeof useDataTable> {}
}
