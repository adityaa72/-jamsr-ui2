import { createConfigContext } from "@jamsrui/utils";

import type { GlobalConfigProps } from "@jamsrui/core";

import type { Skeleton } from "./skeleton";

export const [SkeletonConfig, useSkeletonConfig] =
  createConfigContext<SkeletonConfig.Props>({
    displayName: "SkeletonConfig",
  });

export namespace SkeletonConfig {
  export interface Props extends Skeleton.Props, GlobalConfigProps<Skeleton.Props> {}
}
