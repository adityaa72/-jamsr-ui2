"use client";

import { mergeConfigProps } from "@jamsrui/utils";

import { tableVariants } from "./styles";
import { useTableConfig } from "./table-config";
import { TableContext } from "./table-context";
import { TableRoot } from "./table-root";
import { TableTable } from "./table-table";
import { TableWrapper } from "./table-wrapper";
import { useTable } from "./use-table";

export const Table = (props: Table.Props) => {
  const { children } = props;
  const config = useTableConfig();
  const mergedProps = mergeConfigProps(
    tableVariants.defaultVariants,
    config,
    props
  );
  const ctx = useTable(mergedProps);
  return (
    <TableContext value={ctx}>
      <TableRoot>
        <TableWrapper>
          <TableTable>{children}</TableTable>
        </TableWrapper>
      </TableRoot>
    </TableContext>
  );
};

export namespace Table {
  export interface Props extends useTable.Props {}
}
