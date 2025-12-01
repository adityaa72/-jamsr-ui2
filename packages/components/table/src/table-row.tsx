"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useTableContext } from "./table-context";

import type { UIProps } from "@jamsrui/utils";

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
