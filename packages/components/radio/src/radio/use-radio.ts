import { useCallback, useId } from "react";

import {
  useControlledState,
  useFocusVisible,
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

import { radioVariant } from "../styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { RadioSlots, RadioVariantProps } from "../styles";
import type { RadioContent } from "./radio-content";
import type { RadioControl } from "./radio-control";
import type { RadioDescription } from "./radio-description";
import type { RadioIndicator } from "./radio-indicator";
import type { RadioInput } from "./radio-input";
import type { RadioLabel } from "./radio-label";
import type { RadioRoot } from "./radio-root";

export const useRadio = (props: useRadio.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    radioVariant.variantKeys
  );

  const styles = radioVariant(variantProps);
  const inputId = useId();

  const {
    classNames,
    label,
    isDisabled,
    isReadonly,
    defaultChecked,
    onCheckedChange,
    isChecked: propIsChecked,
    children: description,
    ...elementProps
  } = $props;

  const [isChecked, setIsChecked] = useControlledState({
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
    prop: propIsChecked,
  });

  const { isFocusVisible, ref: focusVisibleRef } = useFocusVisible({
    isDisabled,
  });
  const { isPressed, ref: pressRef } = usePress({ isDisabled });
  const inputRefs = useMergeRefs([focusVisibleRef, pressRef]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isDisabled && !isReadonly) {
        setIsChecked(event.target.checked);
      }
    },
    [isDisabled, isReadonly, setIsChecked]
  );

  const getRootProps: PropGetter<RadioRoot.Props> = useCallback(
    (props) => ({
      ...props,
      className: styles.root({
        className: cn(classNames?.root, props.className),
      }),
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("radio"),
      "data-selected": dataAttr(isChecked),
      "data-disabled": dataAttr(isDisabled),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-pressed": dataAttr(isPressed),
    }),
    [classNames?.root, isChecked, isDisabled, isFocusVisible, isPressed, styles]
  );
  const getInputProps: PropGetter<RadioInput.Props> = useCallback(
    (props) => ({
      ...mergeProps(elementProps, props, {
        onChange: handleInputChange,
      }),
      "data-slot": dataAttrDev("input"),
      id: inputId,
      type: "radio",
      ref: inputRefs,
      className: styles.input({
        className: cn(classNames?.input, props.className),
      }),
      disabled: isDisabled,
      readOnly: isReadonly,
    }),
    [
      classNames?.input,
      elementProps,
      handleInputChange,
      inputId,
      inputRefs,
      isDisabled,
      isReadonly,
      styles,
    ]
  );
  const getControlProps: PropGetter<RadioControl.Props> = useCallback(
    (props) => ({
      ...props,
      "data-attr": dataAttrDev("control"),
      className: styles.control({
        className: cn(classNames?.control, props.className),
      }),
    }),
    [classNames?.control, styles]
  );
  const getIndicatorProps: PropGetter<RadioIndicator.Props> = useCallback(
    (props) => ({
      ...props,
      "data-attr": dataAttrDev("indicator"),
      className: styles.indicator({
        className: cn(classNames?.indicator, props.className),
      }),
    }),

    [classNames?.indicator, styles]
  );
  const getLabelProps: PropGetter<RadioLabel.Props> = useCallback(
    (props) => ({
      ...props,
      "data-attr": dataAttrDev("label"),
      htmlFor: inputId,
      className: styles.label({
        className: cn(classNames?.label, props.className),
      }),
    }),
    [classNames?.label, inputId, styles]
  );
  const getContentProps: PropGetter<RadioContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-attr": dataAttrDev("control"),
      className: styles.content({
        className: cn(classNames?.content, props.className),
      }),
    }),
    [classNames?.content, styles]
  );
  const getDescriptionProps: PropGetter<RadioDescription.Props> = useCallback(
    (props) => ({
      ...props,
      "data-attr": dataAttrDev("description"),
      className: styles.description({
        className: cn(classNames?.description, props.className),
      }),
    }),
    [classNames?.description, styles]
  );

  return {
    label,
    isChecked,
    description,
    getRootProps,
    getInputProps,
    getControlProps,
    getLabelProps,
    getContentProps,
    getDescriptionProps,
    getIndicatorProps,
  };
};

export namespace useRadio {
  export interface Props extends RadioVariantProps, UIProps<"input"> {
    label?: string;
    classNames?: SlotsToClassNames<RadioSlots>;
    isDisabled?: boolean;
    isReadonly?: boolean;
    defaultChecked?: boolean;
    isChecked?: boolean;
    onCheckedChange?: (value: boolean) => void;
  }
}
