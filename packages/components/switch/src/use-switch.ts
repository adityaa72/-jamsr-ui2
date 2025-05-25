import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsr-ui/utils";

import { switchVariants } from "./styles";

import type { PropGetter, SlotsToClassNames, UIProps } from "@jamsr-ui/utils";

import type { SwitchSlots, SwitchVariants } from "./styles";

export const useSwitch = (props: useSwitch.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    switchVariants.variantKeys
  );
  const styles = switchVariants(variantProps);

  const { classNames, slotProps, ...elementProps } = $props;

  const getRootProps = useCallback(
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

  const getThumbProps: PropGetter<UIProps<"div">> = useCallback(
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

  const getLabelProps: PropGetter<UIProps<"div">> = useCallback(
    () => ({
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
    [classNames?.label, props, slotProps?.label, styles]
  );

  const getDescriptionProps: PropGetter<UIProps<"div">> = useCallback(
    () => ({
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
    [classNames?.description, props, slotProps?.description, styles]
  );

  const getContentProps: PropGetter<UIProps<"div">> = useCallback(
    () => ({
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
    [classNames?.content, props, slotProps?.content, styles]
  );

  const getWrapperProps: PropGetter<UIProps<"div">> = useCallback(
    () => ({
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
    [classNames?.wrapper, props, slotProps?.wrapper, styles]
  );

  const getTrackProps: PropGetter<UIProps<"div">> = useCallback(
    () => ({
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
    [classNames?.track, props, slotProps?.track, styles]
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
    }),
    [
      getContentProps,
      getDescriptionProps,
      getLabelProps,
      getRootProps,
      getThumbProps,
      getWrapperProps,
      getTrackProps,
    ]
  );
};

export namespace useSwitch {
  export interface Props extends SwitchVariants, UIProps<"div"> {
    classNames?: SlotsToClassNames<SwitchSlots>;
    slotProps?: {
      track?: UIProps<"div">;
      thumb?: UIProps<"div">;
      label?: UIProps<"div">;
      description?: UIProps<"div">;
      content?: UIProps<"div">;
      wrapper?: UIProps<"div">;
    };
  }
}
