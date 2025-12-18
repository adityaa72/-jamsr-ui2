"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { CircularProgress } from "./circular-progress";

export const [CircularProgressConfig, useCircularProgressConfig] =
  createConfigContext<CircularProgressConfig.Props>({
    displayName: "CircularProgressContext",
  });

export namespace CircularProgressConfig {
  export interface Props extends WithGlobalConfig<CircularProgress.Props> {}
}
