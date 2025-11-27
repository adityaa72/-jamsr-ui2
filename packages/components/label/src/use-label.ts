import { useCallback } from "react";

import { useFieldA11yContext } from "@jamsrui/context";
import { useMergeRefs } from "@jamsrui/hooks";
import { cn } from "@jamsrui/utils";

import type { UIProps } from "@jamsrui/utils";

export const useLabel = (props: useLabel.Props): useLabel.ReturnType => {
  const { onMouseDown, className, ref, ...restProps } = props;
  const fieldAllyCtx = useFieldA11yContext();
  const mergedRef = useMergeRefs([ref, fieldAllyCtx?.setLabelRef]);

  const handleOnMouseDown = useCallback(
    (event: React.MouseEvent<HTMLLabelElement>) => {
      const target = event.target as HTMLElement;
      if (target.closest("input, button, textarea, select")) return;
      onMouseDown?.(event);

      if (document.activeElement?.nodeName === "INPUT") {
        event.preventDefault();
      }

      if (event.detail > 1) {
        event.preventDefault();
      }
    },
    [onMouseDown]
  );

  return {
    ref: mergedRef,
    onMouseDown: handleOnMouseDown,
    className: cn(
      "label cursor-default shrink-0 text-sm font-normal text-foreground group-data-invalid:text-danger group-data-disabled:cursor-not-allowed",
      className
    ),
    ...fieldAllyCtx?.getLabelProps(),
    ...restProps,
  };
};

export namespace useLabel {
  export interface ReturnType extends UIProps<"label"> {}
  export interface Props extends UIProps<"label"> {}
}
