"use client";
import { useCallback } from "react";

import { useTimeFieldContext } from "./time-field-context";

import type { ComponentProps } from "react";

import type { TimeSegment } from "./time-segment";

export const useTimeSegment = (
  props: useTimeSegment.Props
): useTimeSegment.ReturnType => {
  const { segment } = props;
  const { activeSegment, setActiveSegment } = useTimeFieldContext();
  console.log(activeSegment);

  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const key = e.key;
      console.log(key);

      if (key === "ArrowLeft") {
        e.preventDefault();
        return;
      }

      if (key === "ArrowRight") {
        e.preventDefault();
        return;
      }

      if (key === "ArrowUp") {
        e.preventDefault();
        return;
      }

      if (key === "ArrowDown") {
        e.preventDefault();
        return;
      }

      if (key === "Home") {
        e.preventDefault();
        return;
      }

      if (key === "End") {
        e.preventDefault();
        return;
      }

      if (key === "Backspace" || key === "Delete") {
        e.preventDefault();
        return;
      }
    },
    []
  );

  const handleOnFocus = useCallback(() => {
    setActiveSegment(segment);
  }, [segment, setActiveSegment]);

  return {
    onKeyDown: handleOnKeyDown,
    onFocus: handleOnFocus,
  };
};

export namespace useTimeSegment {
  export interface ReturnType extends ComponentProps<"div"> {}
  export interface Props {
    segment: TimeSegment.Segment;
  }
}
