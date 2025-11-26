import { useCallback, useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { useInputGroupContextOpt } from "@jamsrui/input-group";
import { useTextFieldContext } from "@jamsrui/textfield";
import { cn, mapPropsVariants } from "@jamsrui/utils";

import { inputGroupVariants, inputVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { InputVariantProps } from "./styles";

export const useInput = (props: useInput.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    inputVariants.variantKeys
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
    ? inputGroupVariants({
        ...inputGroupCtx.variantProps,
        ...variantProps,
      })
    : inputVariants(variantProps);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const getInputProps: PropGetter<UIProps<"input">> = useCallback(
    (props) => ({
      ...textFieldCtx?.getInputProps(),
      ...elementProps,
      ...props,
      className: cn(styles, className),
      value,
      onChange: handleInputChange,
    }),
    [textFieldCtx, elementProps, styles, className, value, handleInputChange]
  );

  return useMemo(
    () => ({
      getInputProps,
    }),
    [getInputProps]
  );
};

export namespace useInput {
  export interface Props extends UIProps<"input">, InputVariantProps {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
  }
}
