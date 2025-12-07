"use client";
import { useFieldA11yContext } from "@jamsrui/context";
import { useMergeRefs } from "@jamsrui/hooks";
import { cn } from "@jamsrui/utils";

import type { UIProps } from "@jamsrui/utils";

export const useDescription = (
  props: useDescription.Props
): useDescription.ReturnType => {
  const { className, ref, ...restProps } = props;
  const fieldAllyCtx = useFieldA11yContext();
  const mergedRef = useMergeRefs([ref, fieldAllyCtx?.setDescriptionRef]);

  return {
    ref: mergedRef,
    className: cn("description text-xs text-foreground-secondary", className),
    ...fieldAllyCtx?.getDescriptionProps(),
    ...restProps,
  };
};

export namespace useDescription {
  export interface ReturnType extends UIProps<"p"> {}
  export interface Props extends UIProps<"p"> {}
}
