import { createContext, use } from "react";

import type { useTable } from "./use-table";

export const TableContext = createContext<TableContext.Props | null>(null);
export const useTableContext = () => {
  const ctx = use(TableContext);
  if (!ctx) throw new Error("useTableContext must be used within TableContext");
  return ctx;
};

export namespace TableContext {
  export interface Props extends ReturnType<typeof useTable> {}
}
