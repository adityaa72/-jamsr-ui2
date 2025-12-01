"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { useTableContext } from "./table-context";

import type { UIProps } from "@jamsrui/utils";

export const TableRoot = (props: TableRoot.Props) => {
  const { getRootProps } = useTableContext();
  const renderElement = useRenderElement("div", {
    props: [getRootProps(props)],
  });
  return renderElement;
};
export namespace TableRoot {
  export interface Props extends UIProps<"div"> {}
}
