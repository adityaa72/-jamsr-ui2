"use client";
import { useRenderElement } from "@jamsrui/hooks";

import { mergeConfigProps } from "@jamsrui/utils";
import { useFieldErrorConfig } from "./field-error-config";
import { fieldErrorVariants } from "./styles";
import { useFieldError } from "./use-field-error";

export const FieldError = (props: FieldError.Props) => {
  const config = useFieldErrorConfig();
  const mergedProps = mergeConfigProps(
    fieldErrorVariants.defaultVariants,
    config,
    props
  );
  const descProps = useFieldError(mergedProps);
  const renderElement = useRenderElement("span", {
    props: [descProps],
  });
  return renderElement;
};

export namespace FieldError {
  export interface Props extends useFieldError.Props {}
}
