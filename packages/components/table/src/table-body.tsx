import { useRenderElement } from "@jamsrui/hooks";

import { useTableContext } from "./table-context";
import { TableEmptyState } from "./table-empty-state";

import type { UIProps } from "@jamsrui/utils";

export const TableBody = (props: TableBody.Props) => {
  const { children } = props;

  const { getBodyProps } = useTableContext();

  const composedChildren = children ?? <TableEmptyState />;
  const renderElement = useRenderElement("tbody", {
    props: [getBodyProps(props), { children: composedChildren }],
  });
  return renderElement;
};
export namespace TableBody {
  export interface Props extends UIProps<"tbody"> {}
}
