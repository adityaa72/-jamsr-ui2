import { createContext, use } from "react";
import { Skeleton } from "./skeleton";

const SkeletonContext = createContext<SkeletonConfig.Props>({});
export const SkeletonConfig = (props: SkeletonConfig.Props) => {
  const { children, ...restProps } = props;
  return <SkeletonContext value={restProps}>{children}</SkeletonContext>;
};

export const useSkeletonConfig = () => {
  const context = use(SkeletonContext);
  return context;
};

export namespace SkeletonConfig {
  export interface Props extends Skeleton.Props {}
}
