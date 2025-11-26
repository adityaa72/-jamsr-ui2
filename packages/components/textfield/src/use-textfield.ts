"use client";

import type { UIProps } from "@jamsrui/utils";
import { useCallback, useId, useMemo } from "react";

export const useTextField = (props: useTextField.Props) => {
  const labelId = useId();
  const descriptionId = useId();
  const inputId = useId();

  const getLabelProps = useCallback(() => {
    return {
      id: labelId,
      htmlFor: inputId,
    };
  }, [labelId, inputId]);
  const getDescriptionProps = useCallback(() => {
    return {
      id: descriptionId,
    };
  }, [descriptionId]);
  const getInputProps = useCallback(() => {
    return {
      id: inputId,
      "aria-describedby": descriptionId,
      "aria-labelledby": labelId,
    };
  }, [descriptionId, labelId, inputId]);

  return useMemo(() => {
    return {
      getLabelProps,
      getDescriptionProps,
      getInputProps,
      labelId,
      descriptionId,
      inputId,
    };
  }, [
    getLabelProps,
    getDescriptionProps,
    getInputProps,
    labelId,
    descriptionId,
    inputId,
  ]);
};

export namespace useTextField {
  export interface Props extends UIProps<"div"> {}
}
