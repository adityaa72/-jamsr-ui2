import { useCallback, useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { useInputGroupContextOpt } from "@jamsrui/input-group";
import { useTextFieldContext } from "@jamsrui/textfield";
import { cn, mapPropsVariants } from "@jamsrui/utils";

import { textareaGroupVariants, textareaVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { TextareaVariantProps } from "./styles";

export const useTextarea = (props: useTextarea.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    textareaVariants.variantKeys
  );
  const inputGroupCtx = useInputGroupContextOpt();
  const textFieldCtx = useTextFieldContext();

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
      ...textFieldCtx?.getInputProps(),
      ...elementProps,
      ...props,
      className: cn(styles, className),
      value,
      onChange: handleTextareaChange,
    }),
    [textFieldCtx, elementProps, styles, className, value, handleTextareaChange]
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
