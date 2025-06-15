import { useRenderElement } from "@jamsrui/hooks";

import { useDataTableContext } from "./data-table-context";

import type { UIProps } from "@jamsrui/utils";

export const DataTableColumnVisibility = (
  props: DataTableColumnVisibility.Props
) => {
  const { table } = useDataTableContext();
  const composedChildren = (
    <>
      <label>
        <input
          {...{
            type: "checkbox",
            checked: table.getIsAllColumnsVisible(),
            onChange: table.getToggleAllColumnsVisibilityHandler(),
          }}
        />{" "}
        Toggle All
      </label>
      {table.getAllLeafColumns().map((column) => {
        return (
          <div key={column.id} className="px-1">
            <label>
              <input
                {...{
                  type: "checkbox",
                  checked: column.getIsVisible(),
                  onChange: column.getToggleVisibilityHandler(),
                }}
              />{" "}
              {column.id}
            </label>
          </div>
        );
      })}
    </>
  );
  const renderElement = useRenderElement("div", {
    props: [props, { children: composedChildren }],
  });
  return renderElement;
};

export namespace DataTableColumnVisibility {
  export interface Props extends UIProps<"div"> {}
}
