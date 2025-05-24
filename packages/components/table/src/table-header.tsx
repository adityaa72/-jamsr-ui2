import { useRenderElement } from "@jamsr-ui/hooks";

import { useTableContext } from "./table-context";

import type { UIProps } from "@jamsr-ui/utils";

export const TableHeader = (props: TableHeader.Props) => {
  const { getHeaderProps } = useTableContext();
  const renderElement = useRenderElement("thead", {
    props: [getHeaderProps(props)],
  });
  return renderElement;
};
export namespace TableHeader {
  export interface Props extends UIProps<"thead"> {}
}
