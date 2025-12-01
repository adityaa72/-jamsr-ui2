import { useState } from "react";

import { IconButton } from "@jamsrui/icon-button";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@jamsrui/icons";
import { Select } from "@jamsrui/select";

import { Label } from "@jamsrui/label";
import { useDataGridContext } from "./data-grid-context";

export const DataGridPagination = () => {
  const take = 10;
  const { table, isEmpty } = useDataGridContext();
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

  const onValueChange = (value: string[]) => {
    table.setPageSize(Number(Array.from(value)[0] ?? [10]));
    setValue(value);
  };
  if (isEmpty) return null;

  return (
    <div
      className="flex flex-col w-full justify-between gap-4 md:flex-row md:items-center"
      data-slot="pagination"
    >
      <Select
        onValueChange={onValueChange}
        returnFocus={false}
        size="sm"
        value={value}
        className="flex flex-row items-center gap-2"
      >
        <Label>Rows Per Page:</Label>
        <Select.Trigger />
        <Select.Popover>
          <Select.Content>
            {[10, 20, 50, 100, 500].map((pageSize) => (
              <Select.Item
                key={pageSize.toString()}
                value={pageSize.toString()}
                textValue={pageSize.toString()}
              >
                {pageSize.toString()}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Popover>
      </Select>
      <div className="flex gap-1 md:gap-4">
        <div className="flex items-center justify-center text-sm font-medium">
          Page {currentPageIndex} of {totalPageCount}
        </div>
        <div className="flex items-center">
          <IconButton
            disabled={!table.getCanPreviousPage()}
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
            disabled={!table.getCanPreviousPage()}
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
            disabled={!table.getCanNextPage()}
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
            disabled={!table.getCanNextPage()}
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

export namespace DataGridPagination {
  export interface Props<T> {}
}
