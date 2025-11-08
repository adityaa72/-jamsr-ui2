import { cn } from "@jamsrui/utils";

import type { UIProps } from "@jamsrui/utils";

export const useDescription = (
  props: useDescription.Props
): useDescription.ReturnType => {
  const { className, ...restProps } = props;

  return {
    ...restProps,
    className: cn("description text-xs text-foreground-secondary", className),
  };
};

export namespace useDescription {
  export interface ReturnType extends UIProps<"p"> {}
  export interface Props extends UIProps<"p"> {}
}
