"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Breadcrumb } from "./breadcrumb";

export const [BreadcrumbConfig, useBreadcrumbConfig] = createConfigContext({
  displayName: "BreadcrumbConfig",
});

export namespace BreadcrumbConfig {
  export interface Props
    extends Breadcrumb.Props,
      GlobalConfigProps<Breadcrumb.Props> {}
}
