"use client";

import { useCallback, useId } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { mapPropsVariants } from "@jamsrui/utils";

import { radioGroupVariant, RadioGroupVariants } from "./styles";

import { RadioGroupRoot } from "./radio-group-root";

export const useRadioGroup = (props: useRadioGroup.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    radioGroupVariant.variantKeys
  );

  const {
    value: propValue,
    defaultValue,
    onValueChange,
    name,
    disabled: isDisabled = false,
    ...restProps
  } = $props;

  const styles = radioGroupVariant(variantProps);
  const inputNameId = useId();
  const inputName = name ?? inputNameId;

  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    prop: propValue,
    onChange: onValueChange,
  });

  const getRootProps = useCallback(
    (): RadioGroupRoot.Props => ({
      ...restProps,
      className: styles.root({
        className: props.className,
      }),
    }),
    [styles, restProps]
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return {
    getRootProps,
    handleInputChange,
    value,
    name: inputName,
    isDisabled,
  };
};

export namespace useRadioGroup {
  export interface Props extends RadioGroupVariants, RadioGroupRoot.Props {
    value?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
    children?: React.ReactNode;
    name?: string;
    disabled?: boolean;
  }
}
