import { useRenderElement } from "@jamsrui/hooks";

import { useTableContext } from "./table-context";

import type { UIProps } from "@jamsrui/utils";

export const TableTable = (props: TableTable.Props) => {
  const { getTableProps } = useTableContext();
  const renderElement = useRenderElement("table", {
    props: [getTableProps(props)],
  });
  return renderElement;
};
export namespace TableTable {
  export interface Props extends UIProps<"table"> {}
}
