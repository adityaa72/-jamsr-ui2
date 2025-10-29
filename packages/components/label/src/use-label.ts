import { useCallback } from "react";

import type { UIProps } from "@jamsrui/utils";
import type { ComponentProps } from "react";

export const useLabel = (props: useLabel.Props): useLabel.ReturnType => {
  const { onMouseDown, ...restProps } = props;

  const handleOnMouseDown = useCallback(
    (event: React.MouseEvent<HTMLLabelElement>) => {
      const target = event.target as HTMLElement;
      if (target.closest("input, button, textarea, select")) return;
      onMouseDown?.(event);

        if (event.detail > 1) {
        event.preventDefault();
      }
    },
    [onMouseDown]
  );

  return {
    onMouseDown: handleOnMouseDown,
    ...restProps,
  };
};

export namespace useLabel {
  export interface ReturnType extends ComponentProps<"label"> {}
  export interface Props extends UIProps<"label"> {}
}
