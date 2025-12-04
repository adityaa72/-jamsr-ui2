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

import type { PropGetter, UIProps } from "@jamsrui/utils";

import type { SwitchVariants } from "./styles";
import type { SwitchContent } from "./switch-content";
import type { SwitchInput } from "./switch-input";
import type { SwitchRoot } from "./switch-root";
import type { SwitchThumb } from "./switch-thumb";
import type { SwitchTrack } from "./switch-track";

export const useSwitch = (props: useSwitch.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    switchVariants.variantKeys
  );
  const styles = switchVariants(variantProps);
  const {
    checked: propIsChecked,
    defaultChecked,
    onCheckedChange,
    disabled = false,
    inputProps,
    ...elementProps
  } = $props;

  const [isChecked, setIsChecked] = useControlledState({
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
    prop: propIsChecked,
  });

  const isDisabled = disabled;
  const { isFocusVisible, ref: focusVisibleRef } = useFocusVisible({
    isDisabled,
  });
  const { isPressed, ref: pressRef } = usePress({ isDisabled });

  const inputRef = inputProps?.ref;
  const inputRefs = useMergeRefs([inputRef, focusVisibleRef, pressRef]);
  const layoutId = useId();

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isDisabled) {
        setIsChecked(event.target.checked);
      }
    },
    [isDisabled, setIsChecked]
  );

  const getRootProps = useCallback(
    (): SwitchRoot.Props => ({
      ...elementProps,
      className: styles.root({
        className: elementProps.className,
      }),
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("switch"),
      "data-checked": dataAttr(isChecked),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-pressed": dataAttr(isPressed),
      "data-disabled": dataAttr(isDisabled),
    }),
    [elementProps, isChecked, isDisabled, isFocusVisible, isPressed, styles]
  );

  const getInputProps: PropGetter<SwitchInput.Props> = useCallback(
    (props) => ({
      ...mergeProps(props, inputProps, {
        onChange: handleInputChange,
      }),
      ref: inputRefs,
      type: "checkbox",
      "data-slot": dataAttrDev("input"),
      className: styles.input({
        className: cn(inputProps?.className, props.className),
      }),
      disabled: isDisabled,
    }),
    [handleInputChange, inputProps, inputRefs, isDisabled, styles]
  );

  const getTrackProps: PropGetter<SwitchTrack.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "track",
      className: styles.track({
        className: props.className,
      }),
    }),
    [styles]
  );

  const getThumbProps: PropGetter<SwitchThumb.Props> = useCallback(
    (props) => ({
      ...props,
      layoutId: layoutId,
      "data-slot": "thumb",
      className: styles.thumb({
        className: props.className,
      }),
    }),
    [layoutId, styles]
  );

  const getContentProps: PropGetter<SwitchContent.Props> = useCallback(
    (props) => ({
      ...props,
      "data-slot": "content",
      className: styles.content({
        className: props.className,
      }),
    }),
    [styles]
  );

  return useMemo(
    () => ({
      isChecked,
      getRootProps,
      getThumbProps,
      getContentProps,
      getTrackProps,
      getInputProps,
    }),
    [
      isChecked,
      getRootProps,
      getThumbProps,
      getContentProps,
      getTrackProps,
      getInputProps,
    ]
  );
};

export namespace useSwitch {
  export interface Props extends SwitchVariants, SwitchRoot.Props {
    defaultChecked?: boolean;
    disabled?: boolean;
    checked?: boolean;
    onCheckedChange?: (value: boolean) => void;
    children?: React.ReactNode;
    inputProps?: UIProps<"input">;
    name?: string;
    form?: string;
  }
}
