"use client";
import { useCallback } from "react";

import { useDateInputContext } from "./date-input-context";

import type { ComponentProps } from "react";

import type { DateInputSegment } from "./date-input-segment";

export const useDateInputSegment = (
  props: useDateInputSegment.Props
): useDateInputSegment.ReturnType => {
  const { segment } = props;
  const { activeSegment, setActiveSegment, } = useDateInputContext();
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

export namespace useDateInputSegment {
  export interface ReturnType extends ComponentProps<"div"> {}
  export interface Props {
    segment: DateInputSegment.Segment;
  }
}
