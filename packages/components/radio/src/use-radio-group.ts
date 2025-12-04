"use client";

import { useCallback, useId } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { cn, mapPropsVariants } from "@jamsrui/utils";

import { radioGroupVariant } from "./styles";

import type { PropGetter } from "@jamsrui/utils";

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
    children,
    name,
  } = $props;

  const styles = radioGroupVariant(variantProps);
  const inputNameId = useId();
  const inputName = name ?? inputNameId;

  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    prop: propValue,
    onChange: onValueChange,
  });

  const getRootProps: PropGetter<RadioGroupRoot.Props> = useCallback(
    (props) => ({
      ...props,
      className: styles.root({
        className: props.className,
      }),
    }),
    [styles]
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
    children,
    name: inputName,
  };
};

export namespace useRadioGroup {
  export interface Props {
    value?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
    children?: React.ReactNode;
    name?: string;
  }
}
