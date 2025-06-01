import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsrui/utils";

import { tableVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { TableSlots, TableVariantProps } from "./styles";
import type { Table } from "./table";
import type { TableBody } from "./table-body";
import type { TableCell } from "./table-cell";
import type { TableColumn } from "./table-column";
import type { TableFooter } from "./table-footer";
import type { TableHeader } from "./table-header";
import type { TableRow } from "./table-row";
import type { TableWrapper } from "./table-wrapper";

export const useTable = (props: useTable.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    tableVariants.variantKeys
  );
  const { classNames, slotProps, ...elementProps } = $props;
  const styles = tableVariants(variantProps);

  const getRootProps: PropGetter<Table.Props> = useCallback(
    () => ({
      ...elementProps,
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("table"),
      className: styles.root({
        className: cn(classNames?.root, $props.className),
      }),
    }),
    [$props.className, classNames?.root, elementProps, styles]
  );

  const getWrapperProps: PropGetter<TableWrapper.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.wrapper, props),
      "data-slot": dataAttrDev("wrapper"),
      className: styles.wrapper({
        className: cn(
          slotProps?.wrapper?.className,
          classNames?.wrapper,
          props.className
        ),
      }),
    }),
    [classNames?.wrapper, slotProps?.wrapper, styles]
  );

  const getTableProps: PropGetter<Table.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.table, props),
      "data-slot": dataAttrDev("table"),
      className: styles.table({
        className: cn(
          slotProps?.table?.className,
          classNames?.table,
          props.className
        ),
      }),
    }),
    [classNames?.table, slotProps?.table, styles]
  );

  const getHeaderProps: PropGetter<TableHeader.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.header, props),
      "data-slot": dataAttrDev("header"),
      className: styles.thead({
        className: cn(
          slotProps?.header?.className,
          classNames?.thead,
          props.className
        ),
      }),
    }),
    [classNames?.thead, slotProps?.header, styles]
  );

  const getColumnProps: PropGetter<TableColumn.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.column, props),
      "data-slot": dataAttrDev("column"),
      className: styles.th({
        className: cn(slotProps?.column, classNames?.th, props.className),
      }),
    }),
    [classNames?.th, slotProps?.column, styles]
  );

  const getBodyProps: PropGetter<TableBody.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.body, props),
      "data-slot": dataAttrDev("body"),
      className: styles.tbody({
        className: cn(
          slotProps?.body?.className,
          classNames?.tbody,
          props.className
        ),
      }),
    }),
    [classNames?.tbody, slotProps?.body, styles]
  );

  const getRowProps: PropGetter<TableRow.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.row, props),
      "data-slot": dataAttrDev("row"),
      className: styles.tr({
        className: cn(
          slotProps?.row?.className,
          classNames?.tr,
          props.className
        ),
      }),
    }),
    [classNames?.tr, slotProps?.row, styles]
  );

  const getCellProps: PropGetter<TableCell.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.cell, props),
      "data-slot": dataAttrDev("cell"),
      className: styles.td({
        className: cn(
          slotProps?.cell?.className,
          classNames?.td,
          props.className
        ),
      }),
    }),
    [classNames?.td, slotProps?.cell, styles]
  );

  const getFooterProps: PropGetter<TableFooter.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.footer, props),
      "data-slot": dataAttrDev("footer"),
      className: styles.tfoot({
        className: cn(
          slotProps?.footer?.className,
          classNames?.tfoot,
          props.className
        ),
      }),
    }),
    [classNames?.tfoot, slotProps?.footer, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getTableProps,
      getHeaderProps,
      getColumnProps,
      getBodyProps,
      getRowProps,
      getCellProps,
      getFooterProps,
      getWrapperProps,
    }),
    [
      getBodyProps,
      getCellProps,
      getColumnProps,
      getFooterProps,
      getHeaderProps,
      getRootProps,
      getRowProps,
      getTableProps,
      getWrapperProps,
    ]
  );
};

export namespace useTable {
  export interface Props extends UIProps<"table">, TableVariantProps {
    classNames?: SlotsToClassNames<TableSlots>;
    slotProps?: {
      table?: Table.Props;
      header?: TableHeader.Props;
      column?: TableColumn.Props;
      body?: TableBody.Props;
      row?: TableRow.Props;
      cell?: TableCell.Props;
      footer?: TableFooter.Props;
      wrapper?: TableWrapper.Props;
    };
  }
}
