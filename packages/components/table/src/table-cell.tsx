"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useTableContext } from "./table-context";

import type { UIProps } from "@jamsrui/utils";

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
