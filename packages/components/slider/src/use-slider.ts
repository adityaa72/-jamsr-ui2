"use client";

import { useControlledState, useMergeRefs } from "@jamsrui/hooks";
import React, { useCallback, useRef, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export interface UseSliderProps {
  value?: number | number[];
  defaultValue?: number | number[];
  onChange?: (value: number | number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  orientation?: "horizontal" | "vertical";
  isDisabled?: boolean;
  minStepsBetweenThumbs?: number;
  name?: string;
}

export const useSlider = (props: UseSliderProps) => {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    orientation = "horizontal",
    isDisabled = false,
    minStepsBetweenThumbs = 0,
  } = props;

  const [values, setValues] = useControlledState<number[]>({
    prop:
      valueProp === undefined
        ? undefined
        : Array.isArray(valueProp)
          ? valueProp
          : [valueProp],
    defaultProp:
      defaultValue === undefined
        ? [min]
        : Array.isArray(defaultValue)
          ? defaultValue
          : [defaultValue],
    onChange: (nextValues) => {
      if (onChange) {
        onChange(nextValues);
      }
    },
  });

  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  const registerThumb = useCallback(
    (index: number, ref: React.RefObject<HTMLDivElement>) => {
      thumbRefs.current[index] = ref;
    },
    []
  );

  const getValueFromPointer = useCallback(
    (event: PointerEvent | React.PointerEvent) => {
      const track = trackRef.current;
      if (!track) return min;

      const rect = track.getBoundingClientRect();
      const isVertical = orientation === "vertical";
      const trackLength = isVertical ? rect.height : rect.width;
      const pointerPos = isVertical ? event.clientY : event.clientX;
      const trackStart = isVertical ? rect.top : rect.left;

      // For vertical, usually bottom is min? Or top is min?
      // CSS range inputs: top is min?
      // Standard Slider: left to right, bottom to top?
      // Let's assume bottom-to-top for vertical if mimicking volume sliders.
      // But standard DOM flow is top-to-bottom.
      // Radix/Base UI often do bottom-up for vertical.
      // Let's match standard: Left->Right (0->100), Bottom->Top (0->100).

      let percentage = (pointerPos - trackStart) / trackLength;
      if (isVertical) {
        // If top is 0 and bottom is 100, then (clientY - top) is correct?
        // No, usually top is start. So top is 0.
        // IF we want bottom to be 0:
        percentage = 1 - percentage;
      }

      // Clamp percentage
      percentage = clamp(percentage, 0, 1);

      const rawValue = min + percentage * (max - min);
      // Step value
      const steppedValue = Math.round((rawValue - min) / step) * step + min;
      return clamp(steppedValue, min, max);
    },
    [min, max, step, orientation]
  );

  const updateValue = useCallback(
    (newValue: number, index: number) => {
      setValues((prev) => {
        if (!prev) return [newValue];
        const next = [...prev];
        next[index] = newValue;
        // Sort values?
        next.sort((a, b) => a - b);
        return next;
      });
    },
    [setValues]
  );

  const [activeThumbIndex, setActiveThumbIndex] = useState<number | null>(null);

  const handleThumbPointerDown = useCallback(
    (index: number, event: React.PointerEvent) => {
      if (isDisabled) return;
      event.preventDefault();
      event.stopPropagation();

      const thumb = thumbRefs.current[index]?.current;
      if (thumb) {
        thumb.setPointerCapture(event.pointerId);
        thumb.focus();
      }
      setActiveThumbIndex(index);

      const handlePointerMove = (e: PointerEvent) => {
        const val = getValueFromPointer(e);
        updateValue(val, index);
      };

      const handlePointerUp = (e: PointerEvent) => {
        if (thumb) {
          thumb.releasePointerCapture(e.pointerId);
        }
        setActiveThumbIndex(null);
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };

      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    },
    [isDisabled, getValueFromPointer, updateValue]
  );

  const onTrackPointerDown = useCallback(
    (event: React.PointerEvent) => {
      if (isDisabled) return;
      // Find closest thumb
      const val = getValueFromPointer(event);

      // Simple closest algorithm
      let closestIndex = 0;
      let minDiff = Infinity;
      values.forEach((v, i) => {
        const diff = Math.abs(v - val);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = i;
        }
      });

      updateValue(val, closestIndex);

      // Also start dragging that thumb?
      // Usually yes.
      // We need to capture pointer on the thumb?
      // Or just global drag.

      setActiveThumbIndex(closestIndex);
      const handlePointerMove = (e: PointerEvent) => {
        const v = getValueFromPointer(e);
        updateValue(v, closestIndex);
      };
      const handlePointerUp = () => {
        setActiveThumbIndex(null);
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    },
    [isDisabled, getValueFromPointer, values, updateValue]
  );

  const getPercentageForValue = useCallback(
    (val: number) => {
      return ((val - min) / (max - min)) * 100;
    },
    [min, max]
  );

  return {
    values,
    min,
    max,
    step,
    orientation,
    isDisabled,
    minStepsBetweenThumbs,
    trackRef,
    registerThumb,
    handleThumbPointerDown,
    onTrackPointerDown,
    getPercentageForValue,
  };
};
