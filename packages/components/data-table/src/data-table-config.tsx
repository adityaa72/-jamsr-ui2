import { createContext, use } from "react";
import { DataTable } from "./data-table";

const DataTableContext = createContext<DataTableConfig.Props>({});
export const DataTableConfig = (props: DataTableConfig.Props) => {
  const { children, ...restProps } = props;
  return <DataTableContext value={restProps}>{children}</DataTableContext>;
};

export const useDataTableConfig = () => {
  const context = use(DataTableContext);
  return context;
};

export namespace DataTableConfig {
  export interface Props extends DataTable.Props {}
}
