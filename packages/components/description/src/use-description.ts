import { useMergeRefs } from "@jamsrui/hooks";
import { useTextFieldContext } from "@jamsrui/textfield";
import { cn } from "@jamsrui/utils";

import type { UIProps } from "@jamsrui/utils";

export const useDescription = (
  props: useDescription.Props
): useDescription.ReturnType => {
  const { className, ref, ...restProps } = props;
  const textFieldCtx = useTextFieldContext();
  const mergedRef = useMergeRefs([ref, textFieldCtx?.setDescriptionRef]);

  return {
    ref: mergedRef,
    className: cn("description text-xs text-foreground-secondary", className),
    ...textFieldCtx?.getDescriptionProps(),
    ...restProps,
  };
};

export namespace useDescription {
  export interface ReturnType extends UIProps<"p"> {}
  export interface Props extends UIProps<"p"> {}
}
