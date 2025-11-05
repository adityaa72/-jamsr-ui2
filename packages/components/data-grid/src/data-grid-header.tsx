import { IconButton } from "@jamsrui/icon-button";
import {
  ArrowDownIcon,
  ArrowLeftToLineIcon,
  ArrowRightToLineIcon,
  ArrowUpIcon,
  ChevronsUpDownIcon,
  EllipsisVerticalIcon,
  EyeClosedIcon,
} from "@jamsrui/icons";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
} from "@jamsrui/menu";
import { TableColumn, TableHeader, TableRow } from "@jamsrui/table";
import { cn } from "@jamsrui/utils";
import { flexRender } from "@tanstack/react-table";

import { useDataGridContext } from "./data-grid-context";
import { getPinningStyles } from "./utils";

import type { Column } from "@tanstack/react-table";

const DataGridHeaderDropdown = ({ column }: { column: Column<any, any> }) => {
  return (
    <Menu classNames={{ content: "border border-divider" }}>
      <MenuTrigger>
        <IconButton label="More" size="xs" variant="light">
          <EllipsisVerticalIcon className="size-4" />
        </IconButton>
      </MenuTrigger>
      <MenuContent>
        <MenuGroup>
          <MenuRadioGroup value={column.getIsSorted() || ""}>
            <MenuRadioItem
              isDisabled={!column.getCanSort()}
              preventCloseOnClick={false}
              startContent={<ArrowUpIcon />}
              tickPlacement="end"
              value="asc"
              onClick={() => {
                if (column.getIsSorted() === "asc") {
                  column.clearSorting();
                } else {
                  column.toggleSorting(false);
                }
              }}
            >
              Asc
            </MenuRadioItem>
            <MenuRadioItem
              isDisabled={!column.getCanSort()}
              preventCloseOnClick={false}
              startContent={<ArrowDownIcon />}
              tickPlacement="end"
              value="desc"
              onClick={() => {
                if (column.getIsSorted() === "desc") {
                  column.clearSorting();
                } else {
                  column.toggleSorting(true);
                }
              }}
            >
              Desc
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem
          isDisabled={!column.getCanHide()}
          onClick={column.getToggleVisibilityHandler()}
          startContent={<EyeClosedIcon />}
        >
          Hide Column
        </MenuItem>
        <MenuSeparator />
        <MenuGroup>
          <MenuRadioGroup value={column.getIsPinned() || ""}>
            <MenuRadioItem
              preventCloseOnClick={false}
              startContent={<ArrowLeftToLineIcon />}
              tickPlacement="end"
              value="left"
              onClick={() => {
                column.pin(column.getIsPinned() === "left" ? false : "left");
              }}
            >
              Pin To Left
            </MenuRadioItem>
            <MenuRadioItem
              preventCloseOnClick={false}
              startContent={<ArrowRightToLineIcon />}
              tickPlacement="end"
              value="right"
              onClick={() =>
                column.pin(column.getIsPinned() === "right" ? false : "right")
              }
            >
              Pin To Right
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};

export const DataGridHeader = () => {
  const { table } = useDataGridContext();
  const headerGroups = table.getHeaderGroups();
  return (
    <TableHeader>
      {headerGroups.map((headerGroup) => {
        return (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableColumn
                  key={header.id}
                  className="relative"
                  colSpan={header.colSpan}
                  data-pinned={header.column.getIsPinned() || undefined}
                  style={{
                    width: header.getSize(),
                    ...getPinningStyles(header.column),
                  }}
                >
                  {header.isPlaceholder ? null : (
                    <div className="flex">
                      <button
                        onClick={header.column.getToggleSortingHandler()}
                        type="button"
                        className={cn(
                          "flex w-full cursor-pointer select-none gap-1 overflow-hidden pr-1 text-transform-inherit",
                          {
                            "": header.column.getCanSort(),
                          }
                        )}
                      >
                        <span className="flex w-full  grow items-center overflow-hidden font-medium">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {
                            {
                              asc: <ArrowUpIcon className="size-3 shrink-0" />,
                              desc: (
                                <ArrowDownIcon className="size-3 shrink-0" />
                              ),
                              empty: (
                                <ChevronsUpDownIcon className="size-3 shrink-0" />
                              ),
                            }[header.column.getIsSorted() || "empty"]
                          }
                        </span>
                      </button>
                      <DataGridHeaderDropdown column={header.column} />
                      <span
                        aria-label="resize"
                        onDoubleClick={() => header.column.resetSize()}
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        role="presentation"
                        className={cn(
                          "absolute right-0 top-1/2  h-3/5 w-[2px] -translate-y-1/2 cursor-ew-resize bg-slate-300/30 opacity-0 transition-all duration-500 group-hover/table:opacity-100 select-none touch-none",
                          {
                            "isResizing cursor-ew-resize":
                              header.column.getIsResizing(),
                          }
                        )}
                      />
                    </div>
                  )}
                </TableColumn>
              );
            })}
          </TableRow>
        );
      })}
    </TableHeader>
  );
};

export namespace DataGridHeader {
  export interface Props {}
}
