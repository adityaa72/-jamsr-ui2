
import { Skeleton as SkeletonRoot } from "./skeleton";
import { SkeletonConfig, useSkeletonConfig } from "./skeleton-config";
import {
  SkeletonSlots,
  SkeletonVariantProps,
  skeletonVariants,
} from "./styles";
import { useSkeleton } from "./use-skeleton";

export {
  SkeletonConfig,
  skeletonVariants,
  useSkeleton,
  useSkeletonConfig,
  type SkeletonSlots,
  type SkeletonVariantProps,
};

export const Skeleton = Object.assign(SkeletonRoot, {});

export namespace Skeleton {
  export interface Props extends SkeletonRoot.Props {}
  export interface Config extends SkeletonConfig.Props {}
}
