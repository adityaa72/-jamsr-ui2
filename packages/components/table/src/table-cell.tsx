import { useRenderElement } from "@jamsr-ui/hooks";

import { useTableContext } from "./table-context";

import type { UIProps } from "@jamsr-ui/utils";

export const TableCell = (props: TableCell.Props) => {
  const { getCellProps } = useTableContext();
  const renderElement = useRenderElement("td", {
    props: [getCellProps(props)],
  });
  return renderElement;
};
export namespace TableCell {
  export interface Props extends UIProps<"td"> {}
}
