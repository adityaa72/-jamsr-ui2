import { useFieldA11yContext } from "@jamsrui/context";
import { useMergeRefs } from "@jamsrui/hooks";
import { cn } from "@jamsrui/utils";

import type { UIProps } from "@jamsrui/utils";

export const useFieldError = (
  props: useFieldError.Props
): useFieldError.ReturnType => {
  const { className, ref, ...restProps } = props;
  const fieldAllyCtx = useFieldA11yContext();
  const mergedRefs = useMergeRefs([ref, fieldAllyCtx?.setFieldErrorRef]);

  return {
    ref: mergedRefs,
    className: cn("field-error text-xs text-danger", className),
    ...fieldAllyCtx?.getFieldErrorProps(),
    ...restProps,
  };
};

export namespace useFieldError {
  export interface ReturnType extends UIProps<"span"> {}
  export interface Props extends UIProps<"span"> {}
}
