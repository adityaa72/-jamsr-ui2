import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsrui/utils";

import { switchVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsrui/utils";

import type { SwitchSlots, SwitchVariants } from "./styles";
import type { Switch } from "./switch";
import type { SwitchDescription } from "./switch-description";
import type { SwitchLabel } from "./switch-label";
import type { SwitchThumb } from "./switch-thumb";
import type { SwitchTrack } from "./switch-track";
import type { SwitchWrapper } from "./switch-wrapper";
import type { SwitchContent } from "./swith-content";
import type { SwitchErrorMessage } from "./swith-error-message";

export const useSwitch = (props: useSwitch.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    switchVariants.variantKeys
  );
  const styles = switchVariants(variantProps);
  const { classNames, slotProps, label, errorMessage, ...elementProps } =
    $props;

  const getRootProps: PropGetter<Switch.Props> = useCallback(
    () => ({
      ...elementProps,
      "data-slot": dataAttrDev("root"),
      "data-component": dataAttrDev("switch"),
      className: styles.root({
        className: cn(classNames?.root, elementProps.className),
      }),
    }),
    [classNames?.root, elementProps, styles]
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
      label,
      errorMessage,
    }),
    [
      getContentProps,
      getDescriptionProps,
      getLabelProps,
      getRootProps,
      getThumbProps,
      getWrapperProps,
      getTrackProps,
      getErrorMessageProps,
      label,
      errorMessage,
    ]
  );
};

export namespace useSwitch {
  export interface Props extends SwitchVariants, UIProps<"div"> {
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
    };
  }
}
