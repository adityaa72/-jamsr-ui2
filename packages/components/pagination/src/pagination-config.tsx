"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Pagination } from "./pagination";

export const [PaginationConfig, usePaginationConfig] = createConfigContext({
  displayName: "PaginationConfig",
});

export namespace PaginationConfig {
  export interface Props extends WithGlobalConfig<Pagination.Props> {}
}
