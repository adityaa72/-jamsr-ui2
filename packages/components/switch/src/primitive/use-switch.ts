import { useCallback, useId, useMemo } from "react";

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

import { switchVariants } from "./styles";

import type { PropGetter, SlotsToClassNames } from "@jamsrui/utils";

import type { SwitchSlots, SwitchVariants } from "./styles";
import type { SwitchContent } from "./switch-content";
import type { SwitchDescription } from "./switch-description";
import type { SwitchInput } from "./switch-input";
import type { SwitchLabel } from "./switch-label";
import type { SwitchRoot } from "./switch-root";
import type { SwitchThumb } from "./switch-thumb";
import type { SwitchTrack } from "./switch-track";
import type { SwitchWrapper } from "./switch-wrapper";

export const useSwitch = (props: useSwitch.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    switchVariants.variantKeys
  );
  const styles = switchVariants(variantProps);
  const {
    isChecked: propIsChecked,
    defaultChecked,
    onCheckedChange,
    isDisabled,
    isReadonly,
    classNames,
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
  const layoutId = useId();

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isDisabled && !isReadonly) {
        setIsChecked(event.target.checked);
      }
    },
    [isDisabled, isReadonly, setIsChecked]
  );

  const getRootProps: PropGetter<SwitchRoot.Props> = useCallback(
    (props) => ({
      ...props,
      className: styles.root({
        className: cn(classNames?.root, props.className),
      }),
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("switch"),
      "data-checked": dataAttr(isChecked),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-pressed": dataAttr(isPressed),
      "data-disabled": dataAttr(isDisabled),
    }),
    [classNames?.root, isChecked, isDisabled, isFocusVisible, isPressed, styles]
  );

  const getInputProps: PropGetter<SwitchInput.Props> = useCallback(
    (props) => ({
      ...mergeProps<SwitchInput.Props>(props, {
        onChange: handleInputChange,
      }),
      ref: inputRefs,
      type: "checkbox",
      "data-slot": dataAttrDev("input"),
      className: styles.input({
        className: cn(classNames?.input, props.className),
      }),
      disabled: isDisabled,
      readOnly: isReadonly,
    }),
    [
      classNames?.input,
      handleInputChange,
      inputRefs,
      isDisabled,
      isReadonly,
      styles,
    ]
  );

  const getTrackProps: PropGetter<SwitchTrack.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "track",
      className: styles.track({
        className: cn(classNames?.track, props.className),
      }),
    }),
    [classNames?.track, styles]
  );

  const getThumbProps: PropGetter<SwitchThumb.Props> = useCallback(
    (props) => ({
      ...props,
      layoutId: layoutId,
      "data-slot": "thumb",
      className: styles.thumb({
        className: cn(classNames?.thumb, props.className),
      }),
    }),
    [classNames?.thumb, layoutId, styles]
  );

  const getLabelProps: PropGetter<SwitchLabel.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "label",
      className: styles.label({
        className: cn(classNames?.label, props.className),
      }),
    }),
    [classNames?.label, styles]
  );

  const getDescriptionProps: PropGetter<SwitchDescription.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "description",
      className: styles.description({
        className: cn(classNames?.description, props.className),
      }),
    }),
    [classNames?.description, styles]
  );

  const getContentProps: PropGetter<SwitchContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "content",
      className: styles.content({
        className: cn(classNames?.content, props.className),
      }),
    }),
    [classNames?.content, styles]
  );

  const getWrapperProps: PropGetter<SwitchWrapper.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "wrapper",
      className: styles.wrapper({
        className: cn(classNames?.wrapper, props.className),
      }),
    }),
    [classNames?.wrapper, styles]
  );

  return useMemo(
    () => ({
      isChecked,
      getRootProps,
      getThumbProps,
      getLabelProps,
      getDescriptionProps,
      getContentProps,
      getWrapperProps,
      getTrackProps,
      getInputProps,
    }),
    [
      isChecked,
      getRootProps,
      getThumbProps,
      getLabelProps,
      getDescriptionProps,
      getContentProps,
      getWrapperProps,
      getTrackProps,
      getInputProps,
    ]
  );
};

export namespace useSwitch {
  export interface Props extends SwitchVariants {
    isReadonly?: boolean;
    isDisabled?: boolean;
    isChecked?: boolean;
    onCheckedChange?: (value: boolean) => void;
    defaultChecked?: boolean;
    children?: React.ReactNode;
    classNames?: SlotsToClassNames<SwitchSlots>;
  }
}
