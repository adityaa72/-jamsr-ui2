import { useCallback, useId, useMemo } from "react";

import {
  useControlledState,
  useFocusVisible,
  useHover,
  useMergeRefs,
  usePress,
} from "@jamsrui/hooks";
import {
  cn,
  dataAttr,
  dataAttrDev,
  mapPropsVariants,
  mergeProps,
} from "@jamsrui/utils";

import { checkboxVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { CheckboxContent } from "./checkbox-content";
import type { CheckboxDescription } from "./checkbox-description";
import type { CheckboxErrorMessage } from "./checkbox-error-message";
import type { CheckboxInput } from "./checkbox-input";
import type { CheckboxLabel } from "./checkbox-label";
import type { CheckboxRoot } from "./checkbox-root";
import type { CheckboxTrigger } from "./checkbox-trigger";
import type { CheckboxWrapper } from "./checkbox-wrapper";
import type { CheckboxSlots, CheckboxVariantProps } from "./styles";

export const useCheckbox = (props: useCheckbox.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    checkboxVariants.variantKeys
  );
  const styles = checkboxVariants(variantProps);

  const {
    isChecked: isCheckedProp,
    onCheckedChange,
    defaultChecked,
    isReadonly,
    classNames,
    isDisabled: isDisabledProp,
    children,
    ...elementProps
  } = $props;

  const [isChecked = false, setIsChecked] = useControlledState({
    defaultProp: defaultChecked,
    prop: isCheckedProp,
    onChange: onCheckedChange,
  });

  const inputId = useId();

  const isDisabled = isDisabledProp ?? isReadonly;
  const { isFocusVisible, ref: focusVisibleRef } = useFocusVisible({
    isDisabled,
  });
  const { isPressed, ref: pressRef } = usePress({
    isDisabled,
  });
  const { isHovered, ref: hoverRef } = useHover({
    isDisabled,
  });
  const inputRef = useMergeRefs([focusVisibleRef, pressRef, hoverRef]);

  const handleInputOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    },
    [setIsChecked]
  );

  const getRootProps: PropGetter<CheckboxRoot.Props> = useCallback(
    (props) => ({
      ...props,
      className: styles.root({
        className: cn(classNames?.root),
      }),
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("checkbox"),
      "data-checked": dataAttr(isChecked),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-pressed": dataAttr(isPressed),
      "data-hovered": dataAttr(isHovered),
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
    }),
    [
      classNames?.root,
      isChecked,
      isDisabled,
      isFocusVisible,
      isHovered,
      isPressed,
      styles,
    ]
  );

  const getInputProps: PropGetter<CheckboxInput.Props> = useCallback(
    (props) => ({
      ...mergeProps(elementProps, props, {
        onChange: handleInputOnChange,
      }),
      disabled: isDisabled,
      "aria-disabled": dataAttr(isDisabled),
      id: inputId,
      ref: inputRef,
      type: "checkbox",
      "data-slot": dataAttrDev("input"),
      className: styles.input({
        className: cn(
          classNames?.input,
          elementProps.className,
          props.className
        ),
      }),
    }),
    [
      elementProps,
      handleInputOnChange,
      isDisabled,
      inputId,
      inputRef,
      styles,
      classNames?.input,
    ]
  );

  const getWrapperProps: PropGetter<CheckboxWrapper.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("wrapper"),
      className: styles.wrapper({
        className: cn(classNames?.wrapper, props.className),
      }),
    }),
    [classNames?.wrapper, styles]
  );

  const getLabelProps: PropGetter<CheckboxLabel.Props> = useCallback(
    (props) => ({
      ...props,
      htmlFor: inputId,
      "data-slot": dataAttrDev("label"),
      className: styles.label({
        className: cn(classNames?.label, props.className),
      }),
    }),
    [classNames?.label, inputId, styles]
  );
  const getTriggerProps: PropGetter<CheckboxTrigger.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("trigger"),
      className: styles.trigger({
        className: cn(classNames?.trigger, props.className),
      }),
    }),
    [classNames?.trigger, styles]
  );

  const getDescriptionProps: PropGetter<CheckboxDescription.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": dataAttrDev("description"),
        className: styles.description({
          className: cn(classNames?.description, props.className),
        }),
      }),
      [classNames?.description, styles]
    );

  const getContentProps: PropGetter<CheckboxContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: cn(classNames?.content, props.className),
      }),
    }),
    [classNames?.content, styles]
  );

  const getErrorMessageProps: PropGetter<CheckboxErrorMessage.Props> =
    useCallback(
      (props) => ({
        ...props,
        "data-slot": dataAttrDev("errorMessage"),
        className: styles.errorMessage({
          className: cn(classNames?.errorMessage, props.className),
        }),
      }),
      [classNames?.errorMessage, styles]
    );

  return useMemo(
    () => ({
      getRootProps,
      getWrapperProps,
      getLabelProps,
      getInputProps,
      getTriggerProps,
      getDescriptionProps,
      getContentProps,
      onCheckedChange,
      getErrorMessageProps,
      defaultChecked,
      isChecked,
      children,
    }),
    [
      children,
      defaultChecked,
      getContentProps,
      getDescriptionProps,
      getErrorMessageProps,
      getInputProps,
      getLabelProps,
      getRootProps,
      getTriggerProps,
      getWrapperProps,
      isChecked,
      onCheckedChange,
    ]
  );
};

export namespace useCheckbox {
  export interface Props extends UIProps<"input">, CheckboxVariantProps {
    defaultChecked?: boolean;
    isChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    classNames?: SlotsToClassNames<CheckboxSlots>;
    isReadonly?: boolean;
    isDisabled?: boolean;
  }
}
