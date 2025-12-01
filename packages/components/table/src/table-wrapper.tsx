"use client";

import { useRenderElement } from "@jamsrui/hooks";

import { useTableContext } from "./table-context";

import type { UIProps } from "@jamsrui/utils";

export const TableWrapper = (props: TableWrapper.Props) => {
  const { getWrapperProps } = useTableContext();
  const renderElement = useRenderElement("div", {
    props: [getWrapperProps(props)],
  });
  return renderElement;
};
export namespace TableWrapper {
  export interface Props extends UIProps<"div"> {}
}
