import { useRenderElement } from "@jamsrui/hooks";

import { useTableContext } from "./table-context";
import { TableEmptyState } from "./table-empty-state";

import type { UIProps } from "@jamsrui/utils";

export const TableBody = (props: TableBody.Props) => {
  const { children, emptySlot = <TableEmptyState />, ...restProps } = props;
  const { getBodyProps } = useTableContext();
  const composedChildren = children ?? emptySlot;
  const renderElement = useRenderElement("tbody", {
    props: [getBodyProps(restProps), { children: composedChildren }],
  });
  return renderElement;
};

export namespace TableBody {
  export interface Props extends UIProps<"tbody"> {
    emptySlot?: React.ReactNode;
  }
}
