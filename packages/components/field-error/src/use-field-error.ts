import { useMergeRefs } from "@jamsrui/hooks";
import { useTextFieldContext } from "@jamsrui/textfield";
import { cn } from "@jamsrui/utils";

import type { UIProps } from "@jamsrui/utils";

export const useFieldError = (
  props: useFieldError.Props
): useFieldError.ReturnType => {
  const { className, ref, ...restProps } = props;
  const textFieldCtx = useTextFieldContext();
  const mergedRefs = useMergeRefs([ref, textFieldCtx?.setFieldErrorRef]);

  return {
    ref: mergedRefs,
    className: cn("field-error text-xs text-danger", className),
    ...textFieldCtx?.getFieldErrorProps(),
    ...restProps,
  };
};

export namespace useFieldError {
  export interface ReturnType extends UIProps<"span"> {}
  export interface Props extends UIProps<"span"> {}
}
