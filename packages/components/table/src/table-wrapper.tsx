import { useRenderElement } from "@jamsr-ui/hooks";

import { useTableContext } from "./table-context";

import type { UIProps } from "@jamsr-ui/utils";

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
