import { useCallback, useMemo } from "react";

import { useControlledState } from "@jamsrui/hooks";
import {
  cn,
  dataAttr,
  dataAttrDev,
  mapPropsVariants,
  mergeProps,
} from "@jamsrui/utils";

import { switchVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { SwitchSlots, SwitchVariants } from "./styles";
import type { Switch } from "./switch";
import type { SwitchContent } from "./switch-content";
import type { SwitchDescription } from "./switch-description";
import type { SwitchErrorMessage } from "./switch-error-message";
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
    classNames,
    slotProps,
    label,
    errorMessage,
    children,
    isChecked: propIsChecked,
    defaultChecked,
    onCheckedChange,
    isDisabled,
    isReadonly,
    ...elementProps
  } = $props;

  const [isChecked, setIsChecked] = useControlledState({
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
    prop: propIsChecked,
  });
  console.log(isChecked);

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
      ...mergeProps(props, slotProps?.root),
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("switch"),
      className: styles.root({
        className: cn(classNames?.root, elementProps.className),
      }),
      "data-checked": dataAttr(isChecked),
    }),
    [
      classNames?.root,
      elementProps.className,
      isChecked,
      slotProps?.root,
      styles,
    ]
  );

  const getInputProps: PropGetter<Switch.Props> = useCallback(
    (props) => ({
      ...mergeProps(elementProps, slotProps?.input, props, {
        onChange: handleInputChange,
      }),
      type: "checkbox",
      "data-slot": dataAttrDev("input"),
      className: styles.input({
        className: cn(
          slotProps?.input?.className,
          classNames?.input,
          elementProps.className
        ),
      }),
    }),
    [
      classNames?.input,
      elementProps,
      handleInputChange,
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
      "data-slot": "thumb",
      className: styles.thumb({
        className: cn(
          slotProps?.thumb?.className,
          classNames?.thumb,
          props.className
        ),
      }),
    }),
    [classNames?.thumb, slotProps?.thumb, styles]
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

  const getErrorMessageProps: PropGetter<SwitchErrorMessage.Props> =
    useCallback(
      (props) => ({
        ...mergeProps(slotProps?.errorMessage, props),
        "data-slot": "error-message",
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

  const hasContent = !!label || !!children;

  return useMemo(
    () => ({
      getRootProps,
      getThumbProps,
      getLabelProps,
      getDescriptionProps,
      getContentProps,
      getWrapperProps,
      getTrackProps,
      getErrorMessageProps,
      getInputProps,
      label,
      errorMessage,
      hasContent,
    }),
    [
      getRootProps,
      getThumbProps,
      getLabelProps,
      getDescriptionProps,
      getContentProps,
      getWrapperProps,
      getTrackProps,
      getErrorMessageProps,
      getInputProps,
      label,
      errorMessage,
      hasContent,
    ]
  );
};

export namespace useSwitch {
  export interface Props extends SwitchVariants, UIProps<"input"> {
    label?: string;
    errorMessage?: string;
    classNames?: SlotsToClassNames<SwitchSlots>;
    slotProps?: {
      track?: SwitchTrack.Props;
      thumb?: SwitchThumb.Props;
      label?: SwitchLabel.Props;
      description?: SwitchDescription.Props;
      content?: SwitchContent.Props;
      wrapper?: SwitchWrapper.Props;
      errorMessage?: SwitchErrorMessage.Props;
      input?: SwitchInput.Props;
      root?: SwitchRoot.Props;
    };
    isReadonly?: boolean;
    isDisabled?: boolean;
    isChecked?: boolean;
    onCheckedChange?: (value: boolean) => void;
    defaultChecked?: boolean;
  }
}
