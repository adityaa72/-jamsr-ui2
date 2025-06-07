import { useCallback, useMemo } from "react";

import { cn, dataAttr, dataAttrDev, mergeProps } from "@jamsrui/utils";

import { skeletonVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { Skeleton } from "./skeleton";
import type { SkeletonContent } from "./skeleton-content";
import type { SkeletonSlots, SkeletonVariantProps } from "./styles";

export const useSkeleton = (props: useSkeleton.Props) => {
  const { classNames, slots, isLoading = true, ...elementProps } = props;

  const styles = skeletonVariants(props);

  const getRootProps: PropGetter<Skeleton.Props> = useCallback(
    () => ({
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("skeleton"),
      "data-loaded": dataAttr(!isLoading),
      ...elementProps,
      className: styles.root({
        className: cn(classNames?.root, elementProps.className),
      }),
    }),
    [classNames?.root, elementProps, isLoading, styles]
  );

  const getContentProps: PropGetter<SkeletonContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(slots?.content, props),
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: cn(
          slots?.content?.className,
          classNames?.content,
          props.className
        ),
      }),
    }),
    [classNames?.content, slots?.content, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getContentProps,
    }),
    [getContentProps, getRootProps]
  );
};
export namespace useSkeleton {
  export interface Props extends UIProps<"div">, SkeletonVariantProps {
    classNames?: SlotsToClassNames<SkeletonSlots>;
    slots?: {
      content?: SkeletonContent.Props;
    };
    isLoading?: boolean;
  }
}
