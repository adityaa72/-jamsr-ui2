import { useRenderElement } from "@jamsrui/hooks";

import { useSkeletonContext } from "./skeleton-context";

import type { UIProps } from "@jamsrui/utils";

export const SkeletonContent = (props: SkeletonContent.Props) => {
  const { getContentProps } = useSkeletonContext();
  const renderElement = useRenderElement("div", {
    props: [getContentProps(props)],
  });
  return renderElement;
};

export namespace SkeletonContent {
  export interface Props extends UIProps<"div"> {}
}
