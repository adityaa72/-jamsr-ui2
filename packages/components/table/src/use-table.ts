import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsrui/utils";

import { tableVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { TableSlots, TableVariantProps } from "./styles";
import { Table } from "./table";
import type { TableBody } from "./table-body";
import type { TableCell } from "./table-cell";
import type { TableColumn } from "./table-column";
import type { TableFooter } from "./table-footer";
import type { TableHeader } from "./table-header";
import type { TableRoot } from "./table-root";
import type { TableRow } from "./table-row";
import type { TableWrapper } from "./table-wrapper";

export const useTable = (props: useTable.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    tableVariants.variantKeys
  );
  const { classNames, ...elementProps } = $props;
  const styles = tableVariants(variantProps);

  const getRootProps: PropGetter<TableRoot.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("table"),
      className: styles.root({
        className: cn(classNames?.root, props.className),
      }),
    }),
    [classNames?.root, styles]
  );

  const getWrapperProps: PropGetter<TableWrapper.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("wrapper"),
      className: styles.wrapper({
        className: cn(classNames?.wrapper, props.className),
      }),
    }),
    [classNames?.wrapper, styles]
  );

  const getTableProps: PropGetter<Table.Props> = useCallback(
    (props) => ({
      ...mergeProps(elementProps, props),
      "data-slot": dataAttrDev("table"),
      className: styles.table({
        className: cn(
          elementProps.className,
          classNames?.table,
          props.className
        ),
      }),
    }),
    [classNames?.table, elementProps, styles]
  );

  const getHeaderProps: PropGetter<TableHeader.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("header"),
      className: styles.thead({
        className: cn(classNames?.thead, props.className),
      }),
    }),
    [classNames?.thead, styles]
  );

  const getColumnProps: PropGetter<TableColumn.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("column"),
      className: styles.th({
        className: cn(classNames?.th, props.className),
      }),
    }),
    [classNames?.th, styles]
  );

  const getBodyProps: PropGetter<TableBody.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("body"),
      className: styles.tbody({
        className: cn(classNames?.tbody, props.className),
      }),
    }),
    [classNames?.tbody, styles]
  );

  const getRowProps: PropGetter<TableRow.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("row"),
      className: styles.tr({
        className: cn(classNames?.tr, props.className),
      }),
    }),
    [classNames?.tr, styles]
  );

  const getCellProps: PropGetter<TableCell.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("cell"),
      className: styles.td({
        className: cn(classNames?.td, props.className),
      }),
    }),
    [classNames?.td, styles]
  );

  const getFooterProps: PropGetter<TableFooter.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("footer"),
      className: styles.tfoot({
        className: cn(classNames?.tfoot, props.className),
      }),
    }),
    [classNames?.tfoot, styles]
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
  }
}
