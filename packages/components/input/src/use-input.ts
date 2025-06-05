import { useCallback, useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { cn, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { inputVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { Input } from "./input";
import type { InputClearButton } from "./input-clear-button";
import type { InputContent } from "./input-content";
import type { InputEndContent } from "./input-end-content";
import type { InputErrorMessage } from "./input-error-message";
import type { InputField } from "./input-field";
import type { InputHelperText } from "./input-helper-text";
import type { InputLabel } from "./input-label";
import type { InputStartContent } from "./input-start-content";
import type { InputWrapper } from "./input-wrapper";
import type { InputSlots, InputVariantProps } from "./styles";

export const useInput = (props: useInput.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    inputVariants.variantKeys
  );

  const {
    startContent,
    endContent,
    classNames,
    label,
    isClearable,
    helperText,
    errorMessage,
    isDisabled,
    value: valueProp,
    defaultValue,
    onValueChange,
    onClearInput,
    ...elementProps
  } = $props;

  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: valueProp,
  });

  const styles = inputVariants(variantProps);
  const getRootProps: PropGetter<Input.Props> = useCallback(
    (props) => ({
      ...props,
      "data-component": dataAttrDev("input"),
      "data-slot": dataAttrDev("root"),
      className: styles.root({
        className: cn(classNames?.root, props.className),
      }),
    }),
    [classNames?.root, styles]
  );

  const getInputProps: PropGetter<InputField.Props> = useCallback(
    (props) => ({
      ...elementProps,
      ...props,
      disabled: isDisabled,
      "data-slot": dataAttrDev("input"),
      className: styles.input({
        className: cn(classNames?.input, props.className),
      }),
    }),
    [classNames?.input, elementProps, isDisabled, styles]
  );

  const getWrapperProps: PropGetter<InputWrapper.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("inputWrapper"),
      className: styles.wrapper({
        className: cn(classNames?.wrapper, props.className),
      }),
    }),
    [classNames?.wrapper, styles]
  );

  const getContentProps: PropGetter<InputContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: cn(classNames?.content, props.className),
      }),
    }),
    [classNames?.content, styles]
  );

  const getContentWrapperProps: PropGetter<InputContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("contentWrapper"),
      className: styles.contentWrapper({
        className: cn(classNames?.contentWrapper, props.className),
      }),
    }),
    [classNames?.contentWrapper, styles]
  );

  const getStartContentProps: PropGetter<InputStartContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("startContent"),
      className: styles.startContent({
        className: cn(classNames?.startContent, props.className),
      }),
    }),
    [classNames?.startContent, styles]
  );

  const getEndContentProps: PropGetter<InputEndContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("endContent"),
      className: styles.endContent({
        className: cn(classNames?.endContent, props.className),
      }),
    }),
    [classNames?.endContent, styles]
  );

  const getHelperTextProps: PropGetter<InputHelperText.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("helperText"),
      className: styles.helperText({
        className: cn(classNames?.helperText, props.className),
      }),
    }),
    [classNames?.helperText, styles]
  );

  const getErrorMessageProps: PropGetter<InputErrorMessage.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("errorMessage"),
      className: styles.errorMessage({
        className: cn(classNames?.errorMessage, props.className),
      }),
    }),
    [classNames?.errorMessage, styles]
  );

  const getClearButtonProps: PropGetter<InputClearButton.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("clearButton"),
      className: styles.clearButton({
        className: cn(classNames?.clearButton, props.className),
      }),
    }),
    [classNames?.clearButton, styles]
  );

  const getLabelProps: PropGetter<InputLabel.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("label"),
      className: styles.label({
        className: cn(classNames?.label, props.className),
      }),
    }),
    [classNames?.label, styles]
  );

  const isInvalid = variantProps.isInvalid;
  return useMemo(
    () => ({
      getRootProps,
      getClearButtonProps,
      getStartContentProps,
      getEndContentProps,
      getInputProps,
      getLabelProps,
      getHelperTextProps,
      getErrorMessageProps,
      label,
      helperText,
      errorMessage,
      isInvalid,
      getWrapperProps,
      getContentProps,
      getContentWrapperProps,
      startContent,
      endContent,
    }),
    [
      getRootProps,
      getClearButtonProps,
      getStartContentProps,
      getEndContentProps,
      getInputProps,
      getLabelProps,
      getHelperTextProps,
      getErrorMessageProps,
      label,
      helperText,
      errorMessage,
      isInvalid,
      getWrapperProps,
      getContentProps,
      getContentWrapperProps,
      startContent,
      endContent,
    ]
  );
};

export namespace useInput {
  export interface Props extends UIProps<"input">, InputVariantProps {
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    classNames?: SlotsToClassNames<InputSlots>;
    label?: string;
    isClearable?: boolean;
    helperText?: string;
    errorMessage?: string;
    isInvalid?: boolean;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    onClearInput?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isDisabled?: boolean;
  }
}
