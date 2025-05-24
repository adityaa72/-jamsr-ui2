import { useRenderElement } from "@jamsr-ui/hooks";

import { useTableContext } from "./table-context";

import type { UIProps } from "@jamsr-ui/utils";

export const TableRow = (props: TableRow.Props) => {
  const { getRowProps } = useTableContext();
  const renderElement = useRenderElement("tr", {
    props: [getRowProps(props)],
  });
  return renderElement;
};
export namespace TableRow {
  export interface Props extends UIProps<"tr"> {}
}
