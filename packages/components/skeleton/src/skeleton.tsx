import { useRenderElement } from "@jamsrui/hooks";
import { mergeProps } from "@jamsrui/utils";

import { useSkeletonConfig } from "./skeleton-config";
import { SkeletonContent } from "./skeleton-content";
import { SkeletonContext } from "./skeleton-context";
import { useSkeleton } from "./use-skeleton";

export const Skeleton = (props: Skeleton.Props) => {
  const config = useSkeletonConfig();
  const mergedProps = mergeProps(config, props);
  const ctx = useSkeleton(mergedProps);
  const { getRootProps } = ctx;
  const { children } = props;

  const composedChildren = (
    <>
      <SkeletonContent>{children}</SkeletonContent>
    </>
  );

  const renderElement = useRenderElement("div", {
    props: [getRootProps({}), { children: composedChildren }],
  });
  return <SkeletonContext value={ctx}>{renderElement}</SkeletonContext>;
};

export namespace Skeleton {
  export interface Props extends useSkeleton.Props {}
}
