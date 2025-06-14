import { ChevronDownIcon, ChevronUpIcon } from "@jamsrui/icons";
import { TableColumn, TableHeader, TableRow } from "@jamsrui/table";
import { cn } from "@jamsrui/utils";
import { flexRender } from "@tanstack/react-table";

import { useDataTableContext } from "./data-table-context";

export const DataTableHeader = () => {
  const { table } = useDataTableContext();
  const headerGroups = table.getHeaderGroups();
  return (
    <TableHeader>
      {headerGroups.map((headerGroup) => {
        return (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableColumn key={header.id}>
                  {header.isPlaceholder ? null : (
                    <>
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
                          {{
                            asc: <ChevronUpIcon className="size-4 shrink-0" />,
                            desc: (
                              <ChevronDownIcon className="size-4 shrink-0" />
                            ),
                          }[header.column.getIsSorted() as string] ?? null}
                        </span>
                      </button>
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
                    </>
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

export namespace DataTableHeader {
  export interface Props {}
}
