"use client";

import { DataGrid } from "@jamsrui/react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PaginationState } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { COLUMNS, fetchData } from "./columns";

export const DataGridServerSide = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const dataQuery = useQuery({
    queryKey: ["data", pagination],
    queryFn: () => fetchData(pagination),
    placeholderData: keepPreviousData,
  });
  const defaultData = useMemo(() => [], []);

  return (
    <DataGrid
      columns={COLUMNS}
      data={dataQuery.data?.rows ?? defaultData}
      options={{
        manualPagination: true,
        rowCount: dataQuery.data?.rowCount ?? 0,
        state: {
          pagination,
        },
        onPaginationChange: setPagination,
      }}
    />
  );
};
