import { createContext, use } from "react";
import { Table } from "./table";

const TableContext = createContext<TableConfig.Props>({});
export const TableConfig = (props: TableConfig.Props) => {
  const { children, ...restProps } = props;
  return <TableContext value={restProps}>{children}</TableContext>;
};

export const useTableConfig = () => {
  const context = use(TableContext);
  return context;
};

export namespace TableConfig {
  export interface Props extends Table.Props {}
}
