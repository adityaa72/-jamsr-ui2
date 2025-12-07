"use client";
import { useCallback, useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { useInputGroupContextOpt } from "@jamsrui/input-group";
import { cn, mapPropsVariants } from "@jamsrui/utils";

import { textareaGroupVariants, textareaVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import { useFieldA11yContext } from "@jamsrui/context";
import type { TextareaVariantProps } from "./styles";

export const useTextarea = (props: useTextarea.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    textareaVariants.variantKeys
  );
  const inputGroupCtx = useInputGroupContextOpt();
  const fieldA11yCtx = useFieldA11yContext();

  const {
    value: valueProp,
    defaultValue,
    onValueChange,
    className,
    ...elementProps
  } = $props;

  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: valueProp,
  });
  const styles = inputGroupCtx
    ? textareaGroupVariants({
        ...inputGroupCtx.variantProps,
        ...variantProps,
      })
    : textareaVariants(variantProps);

  const handleTextareaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const getTextareaProps: PropGetter<UIProps<"textarea">> = useCallback(
    (props) => ({
      ...fieldA11yCtx?.getInputProps(),
      ...elementProps,
      ...props,
      className: cn(styles, className),
      value,
      onChange: handleTextareaChange,
    }),
    [fieldA11yCtx, elementProps, styles, className, value, handleTextareaChange]
  );

  return useMemo(
    () => ({
      getTextareaProps,
    }),
    [getTextareaProps]
  );
};

export namespace useTextarea {
  export interface Props extends UIProps<"textarea">, TextareaVariantProps {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
  }
}
