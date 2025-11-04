import { Button } from "@jamsrui/button";
import { useRenderElement } from "@jamsrui/hooks";
import { Settings2Icon } from "@jamsrui/icons";
import { AnimatedTickIcon } from "@jamsrui/icons/animated";
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
          <Button size="sm" startContent={<Settings2Icon />} variant="flat">
            Column Visibility
          </Button>
        </MenuTrigger>
        <MenuContent>
          {table.getAllLeafColumns().map((column) => {
            const header = column.columnDef.header;
            // @ts-expect-error todo
            const text = typeof header === "function" ? header({}) : header;
            return (
              <MenuItem
                key={column.id}
                preventCloseOnClick
                isDisabled={!column.getCanHide()}
                onClick={column.getToggleVisibilityHandler()}
                startContent={
                  <AnimatedTickIcon
                    className="text-primary"
                    isSelected={column.getIsVisible()}
                  />
                }
              >
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
