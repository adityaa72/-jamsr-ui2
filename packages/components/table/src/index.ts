import { Table as TableRoot } from "./table";
import { TableBody } from "./table-body";
import { TableCell } from "./table-cell";
import { TableColumn } from "./table-column";
import { TableConfig, useTableConfig } from "./table-config";
import { TableContext, useTableContext } from "./table-context";
import { TableFooter } from "./table-footer";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";
import { TableTable } from "./table-table";
import { TableWrapper } from "./table-wrapper";
import { TableSlots, TableVariantProps, tableVariants } from "./styles";

export {
  TableBody,
  TableCell,
  TableColumn,
  TableConfig,
  TableContext,
  TableFooter,
  TableHeader,
  TableRow,
  TableTable,
  TableWrapper,
  tableVariants,
  useTableConfig,
  useTableContext,
  type TableSlots,
  type TableVariantProps,
};

export const Table = Object.assign(TableRoot, {
  Body: TableBody,
  Cell: TableCell,
  Column: TableColumn,
  Footer: TableFooter,
  Header: TableHeader,
  Row: TableRow,
  Table: TableTable,
  Wrapper: TableWrapper,
});

export namespace Table {
  export interface Props extends TableRoot.Props {}
  export interface Config extends TableConfig.Props {}
  export interface Body extends TableBody.Props {}
  export interface Cell extends TableCell.Props {}
  export interface Column extends TableColumn.Props {}
  export interface Footer extends TableFooter.Props {}
  export interface Header extends TableHeader.Props {}
  export interface Row extends TableRow.Props {}
  export interface Table extends TableTable.Props {}
  export interface Wrapper extends TableWrapper.Props {}
}
