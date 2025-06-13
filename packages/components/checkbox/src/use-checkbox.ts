import { useCallback, useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";
import { cn, dataAttrDev, mapPropsVariants } from "@jamsrui/utils";

import { checkboxVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { Checkbox } from "./checkbox";
import type { CheckboxContent } from "./checkbox-content";
import type { CheckboxDescription } from "./checkbox-description";
import type { CheckboxHelperText } from "./checkbox-helper-text";
import type { CheckboxInput } from "./checkbox-input";
import type { CheckboxLabel } from "./checkbox-label";
import type { CheckboxTrigger } from "./checkbox-trigger";
import type { CheckboxWrapper } from "./checkbox-wrapper";
import type { CheckboxSlots, CheckboxVariantProps } from "./styles";
import { CheckboxErrorMessage } from "./checkbox-errror-message";

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
    label,
    description,
    helperText,
    isReadonly,
    classNames,
    isDisabled: isDisabledProp,
    ...elementProps
  } = $props;

  const [isChecked = false, setIsChecked] = useControlledState({
    defaultProp: defaultChecked,
    prop: isCheckedProp,
    onChange: onCheckedChange,
  });

  const getRootProps: PropGetter<Checkbox.Props> = useCallback(
    () => ({
      ...elementProps,
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("checkbox"),
      className: styles.root({
        className: cn(classNames?.root, elementProps.className),
      }),
    }),
    [classNames?.root, elementProps, styles]
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
      "data-slot": dataAttrDev("label"),
      className: styles.label({
        className: cn(classNames?.label, props.className),
      }),
    }),
    [classNames?.label, styles]
  );

  const getInputProps: PropGetter<CheckboxInput.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("input"),
      className: styles.input({
        className: cn(classNames?.input, props.className),
      }),
    }),
    [classNames?.input, styles]
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

  const getHelperTextProps: PropGetter<CheckboxHelperText.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("helperText"),
      className: styles.helperText({
        className: cn(classNames?.helperText, props.className),
      }),
    }),
    [classNames?.helperText, styles]
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
      getHelperTextProps,
      getContentProps,
      onCheckedChange,
      defaultChecked,
      label,
      description,
      helperText,
      getErrorMessageProps,
    }),
    [
      defaultChecked,
      description,
      getContentProps,
      getDescriptionProps,
      getErrorMessageProps,
      getHelperTextProps,
      getInputProps,
      getLabelProps,
      getRootProps,
      getTriggerProps,
      getWrapperProps,
      helperText,
      label,
      onCheckedChange,
    ]
  );
};

export namespace useCheckbox {
  export interface Props extends UIProps<"div">, CheckboxVariantProps {
    label?: React.ReactNode;
    description?: React.ReactNode;
    defaultChecked?: boolean;
    isChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    helperText?: string;
    classNames?: SlotsToClassNames<CheckboxSlots>;
    isReadonly?: boolean;
    isDisabled?: boolean;
  }
}
