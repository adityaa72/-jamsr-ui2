import { useEffect, useState } from "react";

import { IconButton } from "@jamsrui/icon-button";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@jamsrui/icons";
import { Select, SelectItem } from "@jamsrui/select";

import { useDataTableContext } from "./data-table-context";

export const DataTablePagination = () => {
  const take = 10;
  const { table } = useDataTableContext();
  const [value, setValue] = useState<string[]>([take.toString()]);

  const onNext = () => {
    table.nextPage();
  };
  const onPrevious = () => {
    table.previousPage();
  };
  const onFirstPage = () => {
    table.setPageIndex(0);
  };
  const onEnd = () => {
    table.setPageIndex(table.getPageCount() - 1);
  };

  const totalPageCount = table.getPageCount();
  const currentPageIndex = totalPageCount
    ? table.getState().pagination.pageIndex + 1
    : 0;

  useEffect(() => {
    table.setPageSize(Number(Array.from(value)[0] ?? [10]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <div
      className="flex flex-col w-full justify-between gap-4 md:flex-row md:items-center"
      data-slot="pagination"
    >
      <Select
        label="Rows Per Page:"
        onValueChange={setValue}
        returnFocus={false}
        size="sm"
        value={value}
        classNames={{
          root: "items-center flex max-w-[80px] flex-row gap-2",
          label: "shrink-0",
        }}
      >
        {[10, 20, 50, 100, 500].map((pageSize) => (
          <SelectItem key={pageSize.toString()} value={pageSize.toString()}>
            {pageSize.toString()}
          </SelectItem>
        ))}
      </Select>
      <div className="flex gap-1 md:gap-4">
        <div className="flex items-center justify-center text-sm font-medium">
          Page {currentPageIndex} of {totalPageCount}
        </div>
        <div className="flex items-center">
          <IconButton
            isDisabled={!table.getCanPreviousPage()}
            label="First Page"
            onClick={onFirstPage}
            radius="full"
            size="sm"
            variant="light"
          >
            <span className="sr-only">Go to first page</span>
            <ChevronDoubleLeftIcon height={20} width={20} />
          </IconButton>
          <IconButton
            isDisabled={!table.getCanPreviousPage()}
            label="Previous Page"
            onClick={onPrevious}
            radius="full"
            size="sm"
            variant="light"
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon height={20} width={20} />
          </IconButton>
          <IconButton
            isDisabled={!table.getCanNextPage()}
            label="Next Page"
            onClick={onNext}
            radius="full"
            size="sm"
            variant="light"
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon height={20} width={20} />
          </IconButton>
          <IconButton
            isDisabled={!table.getCanNextPage()}
            label="Last Page"
            onClick={onEnd}
            radius="full"
            size="sm"
            variant="light"
          >
            <span className="sr-only">Go to last page</span>
            <ChevronDoubleRightIcon height={20} width={20} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export namespace DataTablePagination {
  export interface Props<T> {}
}
