import { useCallback, useMemo } from "react";

import { useFieldA11yContext } from "@jamsrui/context";
import { useControlledState } from "@jamsrui/hooks";
import { useInputGroupContextOpt } from "@jamsrui/input-group";
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
      ...fieldA11yCtx?.getInputProps(),
      ...elementProps,
      ...props,
      className: cn(styles, className),
      value,
      onChange: handleInputChange,
    }),
    [fieldA11yCtx, elementProps, styles, className, value, handleInputChange]
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
