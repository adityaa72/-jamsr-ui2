import { IconButton } from "@jamsrui/icon-button";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowLeftToLineIcon,
  ArrowRightIcon,
  ArrowRightToLineIcon,
  ArrowUpIcon,
  ChevronsUpDownIcon,
  EllipsisVerticalIcon,
  EyeClosedIcon,
} from "@jamsrui/icons";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@jamsrui/menu";
import { TableColumn, TableHeader, TableRow } from "@jamsrui/table";
import { cn } from "@jamsrui/utils";
import { flexRender } from "@tanstack/react-table";

import { useDataGridContext } from "./data-grid-context";

const DataGridHeaderDropdown = () => {
  return (
    <Menu>
      <MenuTrigger>
        <IconButton label="More" size="xs" variant="light">
          <EllipsisVerticalIcon className="size-4" />
        </IconButton>
      </MenuTrigger>
      <MenuContent>
        <MenuItem startContent={<ArrowUpIcon />}>Asc</MenuItem>
        <MenuItem startContent={<ArrowDownIcon />}>Desc</MenuItem>
        <MenuItem startContent={<EyeClosedIcon />}>Hide Column</MenuItem>
        <MenuItem startContent={<ArrowLeftToLineIcon />}>Pin To Left</MenuItem>
        <MenuItem startContent={<ArrowRightToLineIcon />}>
          Pin To Right
        </MenuItem>
        <MenuItem startContent={<ArrowLeftIcon />}>Move To Left</MenuItem>
        <MenuItem startContent={<ArrowRightIcon />}>Move To Right</MenuItem>
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
                <TableColumn key={header.id} className="relative">
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
                      <DataGridHeaderDropdown />
                      <span
                        aria-label="resize"
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        role="presentation"
                        className={cn(
                          "absolute right-0 top-1/2  h-3/5 w-[2px] -translate-y-1/2 cursor-ew-resize bg-slate-300/30 opacity-0 transition-all duration-500 group-hover/table:opacity-100",
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
