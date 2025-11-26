import { useTextFieldContext } from "@jamsrui/textfield";
import { cn } from "@jamsrui/utils";

import type { UIProps } from "@jamsrui/utils";

export const useDescription = (
  props: useDescription.Props
): useDescription.ReturnType => {
  const { className, ...restProps } = props;
  const textFieldCtx = useTextFieldContext();

  return {
    ...restProps,
    ...textFieldCtx?.getDescriptionProps(),
    className: cn("description text-xs text-foreground-secondary", className),
  };
};

export namespace useDescription {
  export interface ReturnType extends UIProps<"p"> {}
  export interface Props extends UIProps<"p"> {}
}
