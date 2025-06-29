import { useRenderElement } from "@jamsrui/hooks";
import { IconButton } from "@jamsrui/icon-button";
import { InfoIcon } from "@jamsrui/icons";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@jamsrui/menu";

import { useDataGridContext } from "./data-grid-context";

import type { UIProps } from "@jamsrui/utils";

export const DataGridColumnVisibility = (
  props: DataGridColumnVisibility.Props
) => {
  const { table } = useDataGridContext();
  const composedChildren = (
    <>
      <Menu>
        <MenuTrigger>
          <IconButton label="Column Visibility" size="sm">
            <InfoIcon />
          </IconButton>
        </MenuTrigger>
        <MenuContent>
          <MenuItem
            preventCloseOnClick
            onClick={table.getToggleAllColumnsVisibilityHandler()}
          >
            <input
              {...{
                type: "checkbox",
                checked: table.getIsAllColumnsVisible(),
                onChange: table.getToggleAllColumnsVisibilityHandler(),
              }}
            />{" "}
            Toggle All
          </MenuItem>
          {table.getAllLeafColumns().map((column) => {
            const header = column.columnDef.header;
            const text = typeof header === "function" ? header({}) : header;
            return (
              <MenuItem
                key={column.id}
                preventCloseOnClick
                onClick={column.getToggleVisibilityHandler()}
              >
                <input
                  {...{
                    type: "checkbox",
                    checked: column.getIsVisible(),
                    onChange: column.getToggleVisibilityHandler(),
                  }}
                />{" "}
                {text}
              </MenuItem>
            );
          })}
        </MenuContent>
      </Menu>
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [props, { children: composedChildren }],
  });
  return renderElement;
};

export namespace DataGridColumnVisibility {
  export interface Props extends UIProps<"div"> {}
}
