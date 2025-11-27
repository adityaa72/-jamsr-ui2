import { useCallback, useMemo } from "react";

import {
  useControlledState,
  useFocusVisible,
  useHover,
  useMergeRefs,
  usePress,
} from "@jamsrui/hooks";
import {
  dataAttr,
  dataAttrDev,
  mapPropsVariants,
  mergeProps,
} from "@jamsrui/utils";

import { checkboxVariants } from "./styles";

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { CheckboxContent } from "./checkbox-content";
import type { CheckboxControl } from "./checkbox-control";
import { CheckboxIndicator } from "./checkbox-indicator";
import type { CheckboxInput } from "./checkbox-input";
import type { CheckboxRoot } from "./checkbox-root";
import type { CheckboxVariantProps } from "./styles";

export const useCheckbox = (props: useCheckbox.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    checkboxVariants.variantKeys
  );
  const { isInvalid } = variantProps;
  const styles = checkboxVariants(variantProps);

  const {
    isChecked: isCheckedProp,
    onCheckedChange,
    defaultChecked,
    isIntermediate,
    disabled = false,
    inputProps,
    ...elementProps
  } = $props;

  const isDisabled = disabled;
  const [isChecked = false, setIsChecked] = useControlledState({
    defaultProp: defaultChecked,
    prop: isCheckedProp,
    onChange: onCheckedChange,
  });

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

  const getRootProps = useCallback(
    (): CheckboxRoot.Props => ({
      ...elementProps,
      className: styles.root({
        className: elementProps.className,
      }),
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("checkbox"),
      "data-checked": dataAttr(isChecked || isIntermediate),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-pressed": dataAttr(isPressed),
      "data-hovered": dataAttr(isHovered),
      "data-disabled": dataAttr(isDisabled),
      "aria-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
    }),
    [
      elementProps,
      isChecked,
      isDisabled,
      isFocusVisible,
      isHovered,
      isIntermediate,
      isPressed,
      isInvalid,
      styles,
    ]
  );

  const getInputProps: PropGetter<CheckboxInput.Props> = useCallback(
    (props) => ({
      onChange: handleInputOnChange,
      ...mergeProps(props, inputProps, {
        onChange: handleInputOnChange,
      }),
      disabled: isDisabled,
      "aria-disabled": dataAttr(isDisabled),
      ref: inputRef,
      type: "checkbox",
      "data-slot": dataAttrDev("input"),
      className: styles.input({
        className: props.className,
      }),
    }),
    [handleInputOnChange, isDisabled, inputRef, styles]
  );

  const getContentProps: PropGetter<CheckboxContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("content"),
      className: styles.content({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getControlProps: PropGetter<CheckboxControl.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("control"),
      className: styles.control({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getIndicatorProps: PropGetter<CheckboxIndicator.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": dataAttrDev("indicator"),
      className: styles.indicator({
        className: props.className,
      }),
    }),
    [styles]
  );

  return useMemo(
    () => ({
      getRootProps,
      getInputProps,
      getContentProps,
      getControlProps,
      getIndicatorProps,
      onCheckedChange,
      defaultChecked,
      isChecked,
      isIntermediate,
    }),
    [
      defaultChecked,
      getContentProps,
      getInputProps,
      getRootProps,
      getControlProps,
      getIndicatorProps,
      isChecked,
      isIntermediate,
      onCheckedChange,
    ]
  );
};

export namespace useCheckbox {
  export interface Props extends CheckboxRoot.Props, CheckboxVariantProps {
    defaultChecked?: boolean;
    isChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    isIntermediate?: boolean;
    disabled?: boolean;
    inputProps?: UIProps<"input">;
  }
}
