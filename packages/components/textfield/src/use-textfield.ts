"use client";

import { useCallback, useMemo } from "react";

import { cn } from "@jamsrui/utils";

import type { PropGetter } from "@jamsrui/utils";

import type { TextfieldRoot } from "./textfield-root";

export const useTextField = (props: useTextField.Props) => {
  const { className, ...restProps } = props;

  const getRootProps: PropGetter<TextfieldRoot.Props> = useCallback(
    () => ({
      className: cn("flex flex-col gap-1", className),
      ...restProps,
    }),
    [className, restProps]
  );

  return useMemo(() => {
    return {
      getRootProps,
    };
  }, [getRootProps]);
};

export namespace useTextField {
  export interface Props extends TextfieldRoot.Props {}
}
