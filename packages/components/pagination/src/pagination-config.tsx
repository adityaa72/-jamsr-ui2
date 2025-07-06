import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Pagination } from "./pagination";

export const [PaginationConfig, usePaginationConfig] = createConfigContext({
  displayName: "PaginationConfig",
});

export namespace PaginationConfig {
  export interface Props
    extends Pagination.Props,
      GlobalConfigProps<Pagination.Props> {}
}
