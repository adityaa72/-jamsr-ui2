"use client";
import type { ColumnDef } from "@tanstack/react-table";

export interface DataGridProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
