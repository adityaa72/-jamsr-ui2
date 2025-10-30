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
    slotProps,
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
      ...mergeProps(slotProps?.root, props),
      className: styles.root({
        className: cn(
          slotProps?.root?.className,
          classNames?.root,
          props.className
        ),
      }),
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("switch"),
      "data-checked": dataAttr(isChecked),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-pressed": dataAttr(isPressed),
      "data-disabled": dataAttr(isDisabled),
    }),
    [
      classNames?.root,
      isChecked,
      isDisabled,
      isFocusVisible,
      isPressed,
      slotProps?.root,
      styles,
    ]
  );

  const getInputProps: PropGetter<SwitchInput.Props> = useCallback(
    (props) => ({
      ...mergeProps<SwitchInput.Props>(slotProps?.input, props, {
        onChange: handleInputChange,
      }),
      ref: inputRefs,
      type: "checkbox",
      "data-slot": dataAttrDev("input"),
      className: styles.input({
        className: cn(
          slotProps?.input?.className,
          classNames?.input,
          props.className
        ),
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
      slotProps?.input,
      styles,
    ]
  );

  const getTrackProps: PropGetter<SwitchTrack.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.track, props),
      "data-slot": "track",
      className: styles.track({
        className: cn(
          slotProps?.track?.className,
          classNames?.track,
          props.className
        ),
      }),
    }),
    [classNames?.track, slotProps?.track, styles]
  );

  const getThumbProps: PropGetter<SwitchThumb.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.thumb, props),
      layoutId: layoutId,
      "data-slot": "thumb",
      className: styles.thumb({
        className: cn(
          slotProps?.thumb?.className,
          classNames?.thumb,
          props.className
        ),
      }),
    }),
    [classNames?.thumb, layoutId, slotProps?.thumb, styles]
  );

  const getLabelProps: PropGetter<SwitchLabel.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.label, props),
      "data-slot": "label",
      className: styles.label({
        className: cn(
          slotProps?.label?.className,
          classNames?.label,
          props.className
        ),
      }),
    }),
    [classNames?.label, slotProps?.label, styles]
  );

  const getDescriptionProps: PropGetter<SwitchDescription.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.description, props),
      "data-slot": "description",
      className: styles.description({
        className: cn(
          slotProps?.description?.className,
          classNames?.description,
          props.className
        ),
      }),
    }),
    [classNames?.description, slotProps?.description, styles]
  );

  const getContentProps: PropGetter<SwitchContent.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.content, props),
      "data-slot": "content",
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

  const getWrapperProps: PropGetter<SwitchWrapper.Props> = useCallback(
    (props) => ({
      ...mergeProps(slotProps?.wrapper, props),
      "data-slot": "wrapper",
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

  return useMemo(
    () => ({
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
    slotProps?: {
      root?: SwitchRoot.Props;
      input?: SwitchInput.Props;
      track?: SwitchTrack.Props;
      thumb?: SwitchThumb.Props;
      label?: SwitchLabel.Props;
      description?: SwitchDescription.Props;
      content?: SwitchContent.Props;
      wrapper?: SwitchWrapper.Props;
    };
  }
}
