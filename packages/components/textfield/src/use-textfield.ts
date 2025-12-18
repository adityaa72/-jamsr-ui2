"use client";

import { useCallback, useMemo } from "react";

import type { PropGetter } from "@jamsrui/utils";

import { textFieldVariants } from "./styles";
import type { TextfieldRoot } from "./textfield-root";

export const useTextField = (props: useTextField.Props) => {
  const { className, ...restProps } = props;
  const styles = textFieldVariants({ className });

  const getRootProps: PropGetter<TextfieldRoot.Props> = useCallback(
    () => ({
      className: styles,
      ...restProps,
    }),
    [styles, restProps]
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
