import { Table } from "@jamsrui/table";

export const DataGridTable = (props: DataGridTable.Props) => {
  const { children } = props;
  return <Table>{children}</Table>;
};

export namespace DataGridTable {
  export interface Props {
    children: React.ReactNode;
  }
}
