import { useCallback, useId, useMemo } from "react";

import {
  useControlledState,
  useFocus,
  useFocusVisible,
  useHover,
  useMergeRefs,
} from "@jamsrui/hooks";
import {
  cn,
  dataAttr,
  dataAttrDev,
  mapPropsVariants,
  mergeProps,
} from "@jamsrui/utils";

import { inputVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { Input } from "./input";
import type { InputClearButton } from "./input-clear-button";
import type { InputContent } from "./input-content";
import type { InputContentWrapper } from "./input-content-wrapper";
import type { InputDescription } from "./input-description";
import type { InputEndContent } from "./input-end-content";
import type { InputErrorMessage } from "./input-error-message";
import type { InputField } from "./input-field";
import type { InputLabel } from "./input-label";
import type { InputRoot } from "./input-root";
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
    isDisabled = false,
    isReadonly,
    description,
    errorMessage,
    value: valueProp,
    defaultValue,
    onValueChange,
    onClearInput,
    ref,
    slotProps,
    ...elementProps
  } = $props;

  const [value = "", setValue] = useControlledState({
    defaultProp: defaultValue,
    onChange: onValueChange,
    prop: valueProp,
  });

  const styles = inputVariants(variantProps);
  const isInvalid = variantProps.isInvalid;
  const labelId = useId();
  const descriptionId = useId();
  const inputId = useId();
  const errorId = useId();

  const { isFocused, ref: focusRef } = useFocus<HTMLInputElement>({
    isDisabled,
  });
  const { isFocusVisible, ref: focusVisibleRef } =
    useFocusVisible<HTMLInputElement>({
      isDisabled,
    });
  const { isHovered, ref: hoverRef } = useHover<HTMLDivElement>({
    isDisabled,
  });
  const inputRefs = useMergeRefs([ref, focusRef, focusVisibleRef, hoverRef]);

  const handleClear = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onClearInput?.(e);
      setValue("");
    },
    [onClearInput, setValue]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const getRootProps: PropGetter<InputRoot.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.root, props),
      "data-component": dataAttrDev("input"),
      "data-slot": dataAttrDev("root"),
      "data-focused": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hovered": dataAttr(isHovered),
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      className: styles.root({
        className: cn(
          slotProps?.root?.className,
          classNames?.root,
          props.className
        ),
      }),
    }),
    [
      classNames?.root,
      isDisabled,
      isFocusVisible,
      isFocused,
      isHovered,
      isInvalid,
      slotProps?.root,
      styles,
    ]
  );

  const getInputProps: PropGetter<InputField.Props> = useCallback(
    (props) => ({
      id: inputId,
      disabled: isDisabled,
      readOnly: isReadonly,
      "aria-labelledby": labelId,
      "aria-describedby": `${descriptionId} ${errorId}`,
      ...elementProps,
      ...props,
      ref: inputRefs,
      "data-slot": dataAttrDev("input"),
      className: styles.input({
        className: cn(classNames?.input, props.className),
      }),
      value,
      onChange: handleInputChange,
    }),
    [
      inputId,
      isDisabled,
      isReadonly,
      labelId,
      descriptionId,
      errorId,
      elementProps,
      inputRefs,
      styles,
      classNames?.input,
      value,
      handleInputChange,
    ]
  );

  const getWrapperProps: PropGetter<InputWrapper.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.wrapper, props),
      "data-slot": dataAttrDev("inputWrapper"),
      className: styles.wrapper({
        className: cn(
          slotProps?.wrapper?.className,
          classNames?.wrapper,
          props.className
        ),
      }),
    }),
    [classNames?.wrapper, slotProps?.wrapper, styles]
  );

  const getContentProps: PropGetter<InputContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.content, props),
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: cn(
          slotProps?.content?.className,
          classNames?.content,
          props.className
        ),
      }),
    }),
    [classNames?.content, slotProps?.content, styles]
  );

  const getContentWrapperProps: PropGetter<InputContentWrapper.Props> =
    useCallback(
      (props) => ({
        ...mergeProps(slotProps?.contentWrapper, props),
        "data-slot": dataAttrDev("contentWrapper"),
        className: styles.contentWrapper({
          className: cn(
            slotProps?.contentWrapper?.className,
            classNames?.contentWrapper,
            props.className
          ),
        }),
      }),
      [classNames?.contentWrapper, slotProps?.contentWrapper, styles]
    );

  const getStartContentProps: PropGetter<InputStartContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.startContent, props),
      "data-slot": dataAttrDev("startContent"),
      className: styles.startContent({
        className: cn(
          slotProps?.startContent?.className,
          classNames?.startContent,
          props.className
        ),
      }),
    }),
    [classNames?.startContent, slotProps?.startContent, styles]
  );

  const getEndContentProps: PropGetter<InputEndContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.endContent, props),
      "data-slot": dataAttrDev("endContent"),
      className: styles.endContent({
        className: cn(
          slotProps?.endContent?.className,
          classNames?.endContent,
          props.className
        ),
      }),
    }),
    [classNames?.endContent, slotProps?.endContent, styles]
  );

  const getDescriptionProps: PropGetter<InputDescription.Props> = useCallback(
    (props) => ({
      id: descriptionId,
      ...mergeProps(slotProps?.description, props),
      "data-slot": dataAttrDev("description"),
      className: styles.description({
        className: cn(
          slotProps?.description?.className,
          classNames?.description,
          props.className
        ),
      }),
    }),
    [classNames?.description, descriptionId, slotProps?.description, styles]
  );

  const getErrorMessageProps: PropGetter<InputErrorMessage.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.errorMessage, props),
      "data-slot": dataAttrDev("errorMessage"),
      className: styles.errorMessage({
        className: cn(
          slotProps?.errorMessage?.className,
          classNames?.errorMessage,
          props.className
        ),
      }),
    }),
    [classNames?.errorMessage, slotProps?.errorMessage, styles]
  );

  const getClearButtonProps: PropGetter<InputClearButton.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.clearButton, props),
      "data-slot": dataAttrDev("clearButton"),
      className: styles.clearButton({
        className: cn(
          slotProps?.clearButton?.className,
          classNames?.clearButton,
          props.className
        ),
      }),
    }),
    [classNames?.clearButton, slotProps?.clearButton, styles]
  );

  const getLabelProps: PropGetter<InputLabel.Props> = useCallback(
    (props) => ({
      htmlFor: inputId,
      id: labelId,
      ...mergeProps(slotProps?.label, props),
      "data-slot": dataAttrDev("label"),
      className: styles.label({
        className: cn(
          slotProps?.label?.className,
          classNames?.label,
          props.className
        ),
      }),
    }),
    [classNames?.label, inputId, labelId, slotProps?.label, styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getClearButtonProps,
      getStartContentProps,
      getEndContentProps,
      getInputProps,
      getLabelProps,
      getDescriptionProps,
      getErrorMessageProps,
      label,
      description,
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
      getDescriptionProps,
      getErrorMessageProps,
      label,
      description,
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
    description?: React.ReactNode;
    errorMessage?: React.ReactNode;
    isInvalid?: boolean;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    onClearInput?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isDisabled?: boolean;
    isReadonly?: boolean;
    slotProps?: {
      root?: Omit<Input.Props, "classNames" | "slotProps">;
      wrapper?: InputWrapper.Props;
      content?: InputContent.Props;
      contentWrapper?: InputContentWrapper.Props;
      startContent?: InputStartContent.Props;
      endContent?: InputEndContent.Props;
      label?: InputLabel.Props;
      description?: InputDescription.Props;
      errorMessage?: InputErrorMessage.Props;
      clearButton?: InputClearButton.Props;
    };
  }
}
