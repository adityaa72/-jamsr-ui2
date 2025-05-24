import { useRenderElement } from "@jamsr-ui/hooks";

import { useTableContext } from "./table-context";

import type { UIProps } from "@jamsr-ui/utils";

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
