import { useRenderElement } from "@jamsr-ui/hooks";
import { mergeProps } from "@jamsr-ui/utils";

import { useTableConfig } from "./table-config";
import { TableContext } from "./table-context";
import { TableTable } from "./table-root";
import { TableWrapper } from "./table-wrapper";
import { useTable } from "./use-table";

export const Table = (props: Table.Props) => {
  const { children } = props;
  const config = useTableConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useTable(mergedProps);
  const { getRootProps } = ctx;

  const composedChildren = (
    <TableWrapper>
      <TableTable>{children}</TableTable>
    </TableWrapper>
  );
  const renderElement = useRenderElement("div", {
    props: [
      getRootProps({}),
      {
        children: composedChildren,
      },
    ],
  });
  return <TableContext value={ctx}>{renderElement}</TableContext>;
};

export namespace Table {
  export interface Props extends useTable.Props {}
}
