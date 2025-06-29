import { Table } from "@jamsrui/table";

import { useDataGridContext } from "./data-grid-context";

export const DataGridTable = (props: DataGridTable.Props) => {
  const { children } = props;
  const { rootProps } = useDataGridContext();
  return <Table {...rootProps}>{children}</Table>;
};

export namespace DataGridTable {
  export interface Props {
    children: React.ReactNode;
  }
}
