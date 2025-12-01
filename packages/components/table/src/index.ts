import { Table as TableRoot } from "./table";
import { TableBody } from "./table-body";
import { TableCell } from "./table-cell";
import { TableColumn } from "./table-column";
import { TableFooter } from "./table-footer";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";
import { TableTable } from "./table-table";
import { TableWrapper } from "./table-wrapper";

export { TableConfig, useTableConfig } from "./table-config";

export {
  TableBody,
  TableCell,
  TableColumn,
  TableFooter,
  TableHeader,
  TableRow,
  TableTable,
  TableWrapper,
};

export const Table = Object.assign(TableRoot, {
  Root: TableRoot,
  Body: TableBody,
  Cell: TableCell,
  Footer: TableFooter,
  Header: TableHeader,
  Row: TableRow,
  Table: TableTable,
  Wrapper: TableWrapper,
  Column: TableColumn,
});

export type { TableSlots, TableVariantProps } from "./styles";
