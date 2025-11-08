import { cn } from "@jamsrui/utils";

import type { UIProps } from "@jamsrui/utils";

export const useFieldError = (
  props: useFieldError.Props
): useFieldError.ReturnType => {
  const { className, ...restProps } = props;

  return {
    ...restProps,
    className: cn("field-error text-xs text-danger", className),
  };
};

export namespace useFieldError {
  export interface ReturnType extends UIProps<"span"> {}
  export interface Props extends UIProps<"span"> {}
}
