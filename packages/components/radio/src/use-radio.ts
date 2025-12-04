"use client";

import { useCallback } from "react";

import { useFocusVisible, useMergeRefs, usePress } from "@jamsrui/hooks";
import {
  dataAttr,
  dataAttrDev,
  mapPropsVariants,
  mergeProps,
} from "@jamsrui/utils";

import { useRadioGroupContext } from "./radio-group-context";
import { radioVariant } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import { useFieldA11yContext } from "@jamsrui/context";
import type { RadioContent } from "./radio-content";
import type { RadioControl } from "./radio-control";
import type { RadioIndicator } from "./radio-indicator";
import type { RadioInput } from "./radio-input";
import type { RadioRoot } from "./radio-root";
import type { RadioVariantProps } from "./styles";

export const useRadio = (props: useRadio.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    radioVariant.variantKeys
  );

  const styles = radioVariant(variantProps);
  const { name: inputName, handleInputChange, value } = useRadioGroupContext();
  const fieldA11yCtx = useFieldA11yContext();

  const {
    disabled: isDisabled = false,
    readonly: isReadonly = false,
    children: description,
    ...elementProps
  } = $props;

  const { isFocusVisible, ref: focusVisibleRef } = useFocusVisible({
    isDisabled,
  });
  const { isPressed, ref: pressRef } = usePress({ isDisabled });
  const inputRefs = useMergeRefs([focusVisibleRef, pressRef]);
  const isChecked = value === props.value;

  const getRootProps: PropGetter<RadioRoot.Props> = useCallback(
    (props) => ({
      ...props,
      className: styles.root({
        className: props.className,
      }),
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("radio"),
      "data-selected": dataAttr(isChecked),
      "data-disabled": dataAttr(isDisabled),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-pressed": dataAttr(isPressed),
    }),
    [isChecked, isDisabled, isFocusVisible, isPressed, styles]
  );
  const getInputProps: PropGetter<RadioInput.Props> = useCallback(
    (props) => ({
      ...fieldA11yCtx?.getInputProps(),
      ...mergeProps(elementProps, props, {
        onChange: handleInputChange,
      }),
      "data-slot": dataAttrDev("input"),
      type: "radio",
      ref: inputRefs,
      className: styles.input({
        className: props.className,
      }),
      disabled: isDisabled,
      readOnly: isReadonly,
      name: inputName,
    }),
    [
      elementProps,
      handleInputChange,
      inputRefs,
      isDisabled,
      isReadonly,
      styles,
      inputName,
    ]
  );
  const getControlProps: PropGetter<RadioControl.Props> = useCallback(
    (props) => ({
      ...props,
      "data-attr": dataAttrDev("control"),
      className: styles.control({
        className: props.className,
      }),
    }),
    [styles]
  );
  const getIndicatorProps: PropGetter<RadioIndicator.Props> = useCallback(
    (props) => ({
      ...props,
      "data-attr": dataAttrDev("indicator"),
      className: styles.indicator({
        className: props.className,
      }),
    }),

    [styles]
  );
  const getContentProps: PropGetter<RadioContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-attr": dataAttrDev("control"),
      className: styles.content({
        className: props.className,
      }),
    }),
    [styles]
  );

  return {
    isChecked,
    description,
    getRootProps,
    getInputProps,
    getControlProps,
    getContentProps,
    getIndicatorProps,
  };
};

export namespace useRadio {
  export interface Props extends RadioVariantProps, UIProps<"input"> {
    disabled?: boolean;
    readonly?: boolean;
  }
}
