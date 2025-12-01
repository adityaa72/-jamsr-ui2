"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useTableContext } from "./table-context";

import type { UIProps } from "@jamsrui/utils";

export const TableColumn = (props: TableColumn.Props) => {
  const { getColumnProps } = useTableContext();
  const renderElement = useRenderElement("th", {
    props: [getColumnProps(props)],
  });
  return renderElement;
};
export namespace TableColumn {
  export interface Props extends UIProps<"th"> {}
}
