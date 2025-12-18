"use client";
import { createConfigContext } from "@jamsrui/utils";

import type { WithGlobalConfig } from "@jamsrui/core";

import type { Skeleton } from "./skeleton";

export const [SkeletonConfig, useSkeletonConfig] =
  createConfigContext<SkeletonConfig.Props>({
    displayName: "SkeletonConfig",
  });

export namespace SkeletonConfig {
  export interface Props extends WithGlobalConfig<Skeleton.Props> {}
}
