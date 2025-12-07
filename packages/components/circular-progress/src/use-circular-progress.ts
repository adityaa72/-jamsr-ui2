"use client";
import { useCallback, useMemo } from "react";

import { cn, dataAttrDev, mapPropsVariants, mergeProps } from "@jamsrui/utils";

import { circularProgressVariants } from "./styles";

import type { PropGetter, SlotsToClassNames } from "@jamsrui/utils";

import type { CircularProgress } from "./circular-progress";
import type { CircularProgressSlots, CircularProgressVariants } from "./styles";

export const useCircularProgress = (props: useCircularProgress.Props) => {
  const [$props, variantProps] = mapPropsVariants(
    props,
    circularProgressVariants.variantKeys
  );

  const {
    value = 40,
    size = 40,
    classNames,
    strokeWidth,
    progressWidth = strokeWidth ?? 3,
    trackWidth = strokeWidth ?? 3,
    showLabel = false,
    labelFormatter = (value) => `${value}%`,
    slotProps,
    ...elementProps
  } = $props;

  const radius = (size - Math.max(trackWidth, progressWidth)) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (value / 100) * circumference;

  const styles = circularProgressVariants(variantProps);

  const getRootProps: PropGetter<CircularProgress.Props> = useCallback(
    () => ({
      width: size,
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      ...elementProps,
      "data-component": dataAttrDev("circular-progress"),
      "data-slot": dataAttrDev("root"),
      className: styles.root({
        className: cn(classNames?.root, elementProps.className),
      }),
    }),
    [classNames?.root, elementProps, size, styles]
  );

  const getTrackProps: PropGetter<useCircularProgress.TrackProps> = useCallback(
    (props) => ({
      cx: size / 2,
      cy: size / 2,
      r: radius,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: trackWidth,
      ...mergeProps(slotProps?.track, props),
      "data-slot": dataAttrDev("track"),
      className: styles.track({
        className: cn(
          slotProps?.track?.className,
          classNames?.track,
          props.className
        ),
      }),
    }),
    [classNames?.track, radius, size, slotProps?.track, trackWidth, styles]
  );

  const getProgressProps: PropGetter<useCircularProgress.ProgressProps> =
    useCallback(
      (props) => ({
        cx: size / 2,
        cy: size / 2,
        r: radius,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: progressWidth,
        strokeDasharray: circumference,
        strokeDashoffset: progressOffset,
        strokeLinecap: "round",
        transform: `rotate(-90) ${size / 2} ${size / 2}`,
        ...mergeProps(slotProps?.progress, props),
        "data-slot": dataAttrDev("progress"),
        className: styles.progress({
          className: cn(
            slotProps?.progress?.className,
            classNames?.progress,
            props.className
          ),
        }),
      }),
      [
        circumference,
        classNames?.progress,
        progressOffset,
        progressWidth,
        radius,
        size,
        slotProps?.progress,
        styles,
      ]
    );

  const getLabelProps: PropGetter<useCircularProgress.LabelProps> = useCallback(
    (props) => ({
      x: "50%",
      y: "50%",
      textAnchor: "middle",
      dy: "0.3em",
      fontSize: "18",
      ...mergeProps(slotProps?.label, props),
      "data-slot": dataAttrDev("label"),
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

  const label = labelFormatter ? labelFormatter(value) : value;

  return useMemo(
    () => ({
      getRootProps,
      getProgressProps,
      getTrackProps,
      getLabelProps,
      showLabel,
      label,
    }),
    [
      getLabelProps,
      getProgressProps,
      getRootProps,
      getTrackProps,
      label,
      showLabel,
    ]
  );
};

export namespace useCircularProgress {
  export interface TrackProps extends React.SVGProps<SVGCircleElement> {}
  export interface ProgressProps extends React.SVGProps<SVGCircleElement> {}
  export interface LabelProps extends React.SVGProps<SVGTextElement> {}

  export interface Props
    extends Omit<React.SVGProps<SVGSVGElement>, "color">,
      CircularProgressVariants {
    value?: number; // Progress value (0 - 100)
    size?: number; // Diameter of the circle
    trackWidth?: number; // Width of the circular track
    progressWidth?: number; // Width of the progress arc
    showLabel?: boolean; // Show progress label
    strokeWidth?: number; // Stroke width for both track and progress
    isIntermediate?: boolean;
    labelFormatter?: (value: number) => string;
    slotProps?: {
      track?: TrackProps;
      progress?: ProgressProps;
      label?: LabelProps;
    };
    classNames?: SlotsToClassNames<CircularProgressSlots>;
  }
}
