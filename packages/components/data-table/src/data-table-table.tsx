import { Table } from "@jamsrui/table";

export const DataTableTable = (props: DataTableTable.Props) => {
  const { children } = props;
  return <Table>{children}</Table>;
};

export namespace DataTableTable {
  export interface Props {
    children: React.ReactNode;
  }
}
