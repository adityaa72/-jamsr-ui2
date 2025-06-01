import { useRenderElement } from "@jamsrui/hooks";

import { useTableContext } from "./table-context";

import type { UIProps } from "@jamsrui/utils";

export const TableBody = (props: TableBody.Props) => {
  const { getBodyProps } = useTableContext();
  const renderElement = useRenderElement("tbody", {
    props: [getBodyProps(props)],
  });
  return renderElement;
};
export namespace TableBody {
  export interface Props extends UIProps<"tbody"> {}
}
