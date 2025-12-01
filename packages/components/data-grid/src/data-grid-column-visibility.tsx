import { Button } from "@jamsrui/button";
import { useRenderElement } from "@jamsrui/hooks";
import { Settings2Icon } from "@jamsrui/icons";
import { AnimatedTickIcon } from "@jamsrui/icons/animated";
import { Menu, MenuItem } from "@jamsrui/menu";

import { useDataGridContext } from "./data-grid-context";

import type { UIProps } from "@jamsrui/utils";

export const DataGridColumnVisibility = (
  props: DataGridColumnVisibility.Props
) => {
  const { table } = useDataGridContext();
  const composedChildren = (
    <Menu>
      <Menu.Trigger>
        <Button size="sm" variant="flat">
          <Settings2Icon />
          Column Visibility
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        {table.getAllLeafColumns().map((column) => {
          const header = column.columnDef.header;
          // @ts-expect-error todo
          const text = typeof header === "function" ? header({}) : header;
          return (
            <MenuItem
              key={column.id}
              preventCloseOnClick
              disabled={!column.getCanHide()}
              onClick={column.getToggleVisibilityHandler()}
              textValue={text}
            >
              <AnimatedTickIcon
                className="text-primary"
                isSelected={column.getIsVisible()}
              />
              {text}
            </MenuItem>
          );
        })}
      </Menu.Content>
    </Menu>
  );

  const renderElement = useRenderElement("div", {
    props: [props, { children: composedChildren }],
  });
  return renderElement;
};

export namespace DataGridColumnVisibility {
  export interface Props extends UIProps<"div"> {}
}
