import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { linearProgressVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { LinearProgress } from "./linear-progress";
import type { LinearProgressBar } from "./linear-progress-bar";
import type { LinearProgressSlots, LinearProgressVariantProps } from "./styles";

export const useLinearProgress = (props: useLinearProgress.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    linearProgressVariants.variantKeys
  );
  const styles = linearProgressVariants(variantProps);
  const { progress: progressProp = 0, classNames, ...elementProps } = $props;
  const isIntermediate = variantProps.isIntermediate ?? true;

  const progress = isIntermediate
    ? progressProp || 50
    : Math.min(progressProp, 100);

  const getRootProps: PropGetter<LinearProgress.Props> = useCallback(
    () => ({
      "data-slot": dataAttrDev("root"),
      ...elementProps,
      className: styles.track({
        className: cn(classNames?.track, elementProps.className),
      }),
    }),
    [classNames?.track, elementProps, styles]
  );

  const getBarProps: PropGetter<LinearProgressBar.Props> = useCallback(
    () => ({
      "data-slot": dataAttrDev("bar"),
      className: styles.bar({
        className: cn(classNames?.bar, elementProps.className),
      }),
      initial: {
        width: isIntermediate ? `${progress}%` : 0,
      },
      animate: {
        width: `${progress}%`,
      },
    }),
    [classNames?.bar, elementProps.className, isIntermediate, progress, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getBarProps,
    }),
    [getBarProps, getRootProps]
  );
};

export namespace useLinearProgress {
  export interface Props extends UIProps<"div">, LinearProgressVariantProps {
    classNames?: SlotsToClassNames<LinearProgressSlots>;
    progress?: number;
    isIntermediate?: boolean;
  }
}
