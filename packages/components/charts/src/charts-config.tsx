"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Charts } from "./charts";

export const [ChartsConfig, useChartsConfig] = createConfigContext({
  displayName: "ChartsConfig",
});

export namespace ChartsConfig {
  export interface Props
    extends Charts.Props,
      GlobalConfigProps<Charts.Props> {}
}
