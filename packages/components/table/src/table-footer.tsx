import { useRenderElement } from "@jamsr-ui/hooks";

import { useTableContext } from "./table-context";

import type { UIProps } from "@jamsr-ui/utils";

export const TableFooter = (props: TableFooter.Props) => {
  const { getFooterProps } = useTableContext();
  const renderElement = useRenderElement("tfoot", {
    props: [getFooterProps(props)],
  });
  return renderElement;
};
export namespace TableFooter {
  export interface Props extends UIProps<"tfoot"> {}
}
