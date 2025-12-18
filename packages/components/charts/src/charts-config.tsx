"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Charts } from "./charts";

export const [ChartsConfig, useChartsConfig] = createConfigContext({
  displayName: "ChartsConfig",
});

export namespace ChartsConfig {
  export interface Props extends WithGlobalConfig<Charts.Props> {}
}
