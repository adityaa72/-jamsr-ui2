import { useCallback } from "react";

import { cn } from "@jamsrui/utils";

import type { UIProps } from "@jamsrui/utils";

export const useLabel = (props: useLabel.Props): useLabel.ReturnType => {
  const { onMouseDown, className, ...restProps } = props;

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
    onMouseDown: handleOnMouseDown,
    className: cn(
      "label cursor-default shrink-0 text-sm font-normal text-foreground",
      className
    ),
    ...restProps,
  };
};

export namespace useLabel {
  export interface ReturnType extends UIProps<"label"> {}
  export interface Props extends UIProps<"label"> {}
}
