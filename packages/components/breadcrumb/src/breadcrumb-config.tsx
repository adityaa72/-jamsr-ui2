"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Breadcrumb } from "./breadcrumb";

export const [BreadcrumbConfig, useBreadcrumbConfig] = createConfigContext({
  displayName: "BreadcrumbConfig",
});

export namespace BreadcrumbConfig {
  export interface Props extends WithGlobalConfig<Breadcrumb.Props> {}
}
